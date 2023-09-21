<script lang="ts">
	import { writable } from 'svelte/store';

	let loaded = writable(false);

	type SplineElement = HTMLElement & {
		_loaded: boolean;
	};

	function isSplineElement(el: HTMLElement): el is SplineElement {
		return '_loaded' in el;
	}

	const viewer = (node: HTMLElement) => {
		if (!isSplineElement(node)) {
			throw new Error('Spline element not found');
		}

		const onLoad = () => {
			loaded.set(true);

			node.shadowRoot?.querySelector('#logo')?.remove(); // Remove Spline logo
		};

		node?.addEventListener('load-complete', onLoad);

		if (node._loaded) {
			onLoad();
		}

		return {
			destroy() {
				node?.removeEventListener('load-complete', onLoad);
			}
		};
	};

	const fallback = (node: HTMLElement) => {
		const destroy = loaded.subscribe((l) => {
			if (!l) return;
			setTimeout(() => {
				node?.style.setProperty('display', 'none');
			}, 500);
		});

		return {
			destroy
		};
	};
</script>

<slot {viewer} {fallback} />
