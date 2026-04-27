<script lang="ts">
    /// <reference types="three" />
    import { T, useTask, useThrelte } from '@threlte/core';
    import { Uniform, MeshBasicMaterial, Vector2, type Material } from 'three';
    import type { WebGLProgramParametersWithUniforms } from 'three';
    import noiseShader from './shaders/noise.glsl?raw';
    const noise = noiseShader;
    import { onMount } from 'svelte';
    import { interactivity } from '@threlte/extras';
    import { useViewport } from '@threlte/extras';

    const { invalidate } = useThrelte();
    const viewport = useViewport();

    interactivity();

    let uAspect: Uniform;
    let uOpacity: Uniform;
    let uTime: Uniform;
    let uMouse: Uniform;
    let uViewportSize: Uniform;
    let uTrailIntensity: Uniform;
    let uTrailPositions: Uniform;
    let uTrailCount: Uniform;

    let mouseX = $state(0);
    let mouseY = $state(0);
    let targetMouseX = $state(0);
    let targetMouseY = $state(0);
    let prevMouseX = $state(0);
    let prevMouseY = $state(0);
    let trailIntensity = $state(0);

    const TRAIL_LENGTH = 20;
    let trailPositions: Array<{ x: number; y: number; intensity: number }> = $state([]);
    const trailData = new Float32Array(TRAIL_LENGTH * 3);
    let frameCount = $state(0);

    $effect(() => {
        const width = $viewport.width;
        const height = $viewport.height;
        if (uAspect) {
            uAspect.value = width / height;
            invalidate();
        }
        if (uViewportSize) {
            uViewportSize.value.x = width;
            uViewportSize.value.y = height;
            invalidate();
        }
    });

    $effect(() => {
        const x = mouseX;
        const y = mouseY;
        if (uMouse) {
            uMouse.value.x = x;
            uMouse.value.y = y;
            invalidate();
        }
    });

    $effect(() => {
        const intensity = trailIntensity;
        if (uTrailIntensity) {
            uTrailIntensity.value = intensity;
            invalidate();
        }
    });

    let material = $state(new MeshBasicMaterial());

    onMount(() => {
        uAspect = new Uniform($viewport.width / $viewport.height);
        uOpacity = new Uniform(0);
        uTime = new Uniform(0);
        uMouse = new Uniform(new Vector2(0, 0));
        uViewportSize = new Uniform(new Vector2($viewport.width, $viewport.height));
        uTrailIntensity = new Uniform(0);
        uTrailPositions = new Uniform(new Float32Array(TRAIL_LENGTH * 3));
        uTrailCount = new Uniform(0);

        const handleMouseMove = (event: MouseEvent) => {
            targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        material.onBeforeCompile = (shader: WebGLProgramParametersWithUniforms) => {
            shader.uniforms.uTime = uTime;
            shader.uniforms.uAspect = uAspect;
            shader.uniforms.uOpacity = uOpacity;
            shader.uniforms.uMouse = uMouse;
            shader.uniforms.uViewportSize = uViewportSize;
            shader.uniforms.uTrailIntensity = uTrailIntensity;
            shader.uniforms.uTrailPositions = uTrailPositions;
            shader.uniforms.uTrailCount = uTrailCount;
            shader.fragmentShader = `
			uniform float uTime;
			uniform float uAspect;
			uniform float uOpacity;
			uniform vec2 uMouse;
			uniform vec2 uViewportSize;
			uniform float uTrailIntensity;
			uniform float uTrailPositions[${TRAIL_LENGTH * 3}];
			uniform int uTrailCount;
			${noise}
			
			float getValue(vec2 uv, float mouseBoost, vec2 screenPos){
				vec2 cID = floor(uv);
				vec2 cUV = fract(uv);

				vec3 gradient, dg, dg2;
				float scale = 0.0175;
				// Slower, smoother animation
				float n = psrddnoise(vec3(cID * 0.03, uTime * 0.05), vec3(0.0), uTime * 0.15, gradient, dg, dg2);
				n = abs(n);

				// Enhanced center visibility - dots more prominent in center, fade to edges
				vec2 centerDist = (screenPos - 0.5) * vec2(1.0, 1.0 / 0.7);
				float distFromCenter = length(centerDist) * 2.0;
				// Adjust mask to show dots only in center area, fade more aggressively
				float centerMask = 1.0 - smoothstep(0.3, 0.9, distFromCenter);
				// More aggressive masking - fewer dots overall
				n = n * (1.0 - centerMask * 0.85);

				// Mouse effect: subtle interaction
				n = n + mouseBoost * 0.3;

				// Adjust dot size for better visibility
				float r = sqrt(2.) * (1. - n * 0.5);
				float fw = length(fwidth(uv));
				
				float fCircle = smoothstep(r, r + fw, length(cUV - 0.5) * 2.);
				return fCircle;
			}
			${shader.fragmentShader}`.replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                `
				vec3 col = diffuse;

				// Responsive scale factor - reduced density for less populated dots
				float mobileScale = 55.0;
				float desktopScale = 110.0;
				float breakpoint = 768.0;
				float scaleFactor = mix(mobileScale, desktopScale, smoothstep(375.0, breakpoint, uViewportSize.x));
				
				vec2 uv = (vUv - 0.5) * vec2(scaleFactor, scaleFactor / uAspect);
				// RGB channel separation for clearer color distinction
				vec2 shift = vec2(-0.15, 1.3);

				// Trail effect
				float proximity = 0.0;
				float brushRadius = 0.10;
				
				for (int i = 0; i < ${TRAIL_LENGTH}; i++) {
					if (i >= uTrailCount) break;
					
					int idx = i * 3;
					vec2 trailPos = vec2(uTrailPositions[idx], uTrailPositions[idx + 1]);
					float trailIntensity = uTrailPositions[idx + 2];
					
					vec2 trailUV = trailPos * 0.5 + 0.5;
					float dist = distance(vUv, trailUV);
					
					float falloff = 1.0 - (dist / brushRadius);
					falloff = pow(max(0.0, falloff), 1.5);
					float p = falloff * trailIntensity;
					
					proximity += p * 0.2;
				}
				
				proximity = clamp(proximity, 0.0, 1.0);

				col.r = getValue(uv + shift, proximity, vUv);
				col.g = getValue(uv, proximity, vUv);
				col.b = getValue(uv - shift, proximity, vUv);

				// Enhanced RGB mixing for clearer color separation
				float overlap = min(min(col.r, col.g), col.b);
				col = mix(col, vec3(1.0), overlap * 0.4);
				
				// Boost color intensity for more vibrant RGB dots
				col = pow(col, vec3(0.9));

				// Reduced opacity - make dots more subtle
				float alpha = max(max(col.r, col.g), col.b) * uOpacity * 0.4;
				vec4 diffuseColor = vec4(col, alpha);
			`
            );
        };

        material.defines = { USE_UV: '' };
        material.transparent = true;

        uOpacity.value = 1;
        uTime.value = 0;
        invalidate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    let lastUpdate = 0;
    const targetFPS = 30;
    const frameTime = 1 / targetFPS;

    useTask((delta: number) => {
        lastUpdate += delta;

        if (lastUpdate < frameTime) return;

        const actualDelta = lastUpdate;
        lastUpdate = 0;

        // Slower, smoother animation to match the visual
        const multiplier = 0.6;
        uTime.value += actualDelta * multiplier;

        frameCount++;
        const shouldUpdateTrail = frameCount % 2 === 0;

        const velocityX = targetMouseX - prevMouseX;
        const velocityY = targetMouseY - prevMouseY;
        const velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

        prevMouseX = targetMouseX;
        prevMouseY = targetMouseY;

        if (shouldUpdateTrail) {
            const velocityThreshold = 0.001;
            const buildUpSpeed = 8.0;
            const decaySpeed = 1.0;

            if (velocity > velocityThreshold) {
                trailIntensity = Math.min(1, trailIntensity + actualDelta * buildUpSpeed);

                const distanceFromLast =
                    trailPositions.length > 0
                        ? Math.sqrt(
                              Math.pow(
                                  targetMouseX - trailPositions[trailPositions.length - 1].x,
                                  2
                              ) +
                                  Math.pow(
                                      targetMouseY - trailPositions[trailPositions.length - 1].y,
                                      2
                                  )
                          )
                        : 1;

                if (distanceFromLast > 0.008) {
                    trailPositions.push({
                        x: targetMouseX,
                        y: targetMouseY,
                        intensity: trailIntensity
                    });

                    if (trailPositions.length > TRAIL_LENGTH) {
                        trailPositions.shift();
                    }
                }
            } else {
                trailIntensity = Math.max(0, trailIntensity - actualDelta * decaySpeed);

                trailPositions = trailPositions
                    .map((pos) => ({
                        ...pos,
                        intensity: Math.max(0, pos.intensity - actualDelta * decaySpeed)
                    }))
                    .filter((pos) => pos.intensity > 0.01);
            }

            if (uTrailPositions && uTrailCount) {
                trailData.fill(0);

                trailPositions.forEach((pos, i) => {
                    if (i < TRAIL_LENGTH) {
                        trailData[i * 3] = pos.x;
                        trailData[i * 3 + 1] = pos.y;
                        trailData[i * 3 + 2] = pos.intensity;
                    }
                });
                uTrailPositions.value = trailData;
                uTrailCount.value = Math.min(trailPositions.length, TRAIL_LENGTH);
            }
        }

        const lerpFactor = 1 - Math.pow(0.0003, actualDelta);
        mouseX += (targetMouseX - mouseX) * lerpFactor;
        mouseY += (targetMouseY - mouseY) * lerpFactor;
    });
</script>

<T.OrthographicCamera position={[0, 0, 10]} fov={10} near={0.1} far={1000} makeDefault />
<T.Mesh scale={[$viewport.width, $viewport.height, 1]} material={material as any}>
    <T.PlaneGeometry args={[1, 1]} />
</T.Mesh>
