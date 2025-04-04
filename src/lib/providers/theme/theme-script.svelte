<script lang="ts">
    import { MEDIA } from './constants';

    interface Props {
        forcedTheme?: string;
        storageKey?: string;
        attribute?: string;
        enableSystem?: boolean;
        defaultTheme?: string;
        value?: { [themeName: string]: string };
        attrs: string[];
    }

    let {
        forcedTheme,
        storageKey,
        attribute,
        enableSystem,
        defaultTheme = 'dark',
        value,
        attrs
    }: Props = $props();

    const getThemeUpdate = (name: string, literal?: boolean) => {
        const themeName = value?.[name] || name;
        const val = literal ? themeName : `'${themeName}'`;

        // Set both attribute and color-scheme
        if (attribute === 'class') {
            return `d.add(${val});document.documentElement.style.setProperty('color-scheme', ${val})`;
        }
        return `d.setAttribute('${attribute}', ${val});document.documentElement.style.setProperty('color-scheme', ${val})`;
    };

    let defaultSystem = $derived(defaultTheme === 'system');
    let classListPrep = $derived(
        attribute === 'class'
            ? `var d=document.documentElement.classList;d.remove(${attrs
                  .map((t: string) => `'${t}'`)
                  .join(',')});`
            : `var d=document.documentElement;`
    );

    // Script implementation varies based on configuration
    let themeScript = $derived(
        `<${'script'}>
            (function() {
                ${classListPrep}
                ${
                    forcedTheme
                        ? getThemeUpdate(forcedTheme)
                        : enableSystem
                          ? `try {
                            var storedTheme = localStorage.getItem('${storageKey}');
                            ${!defaultSystem ? `${getThemeUpdate(defaultTheme)};` : ''}
                            
                            if ("system" === storedTheme || (!storedTheme && ${defaultSystem})) {
                                var mediaQuery = "${MEDIA}";
                                var mql = window.matchMedia(mediaQuery);
                                if (mql.media !== mediaQuery || mql.matches) {
                                    ${getThemeUpdate('dark')}
                                } else {
                                    ${getThemeUpdate('light')}
                                }
                            } else if (storedTheme) {
                                ${value ? `var themeMapping = ${JSON.stringify(value)};` : ''}
                                ${getThemeUpdate(value ? 'themeMapping[storedTheme]' : 'storedTheme', true)}
                            }
                        } catch(e) { console.error("Theme initialization error:", e); }`
                          : `try {
                            var storedTheme = localStorage.getItem("${storageKey}");
                            if (storedTheme) {
                                ${value ? `var themeMapping = ${JSON.stringify(value)};` : ''}
                                ${getThemeUpdate(value ? 'themeMapping[storedTheme]' : 'storedTheme', true)}
                            } else {
                                ${getThemeUpdate(defaultTheme)};
                            }
                        } catch(e) { console.error("Theme initialization error:", e); }`
                }
            })();
        </${'script'}>`
    );
</script>

<svelte:head>
    {@html themeScript}
</svelte:head>
