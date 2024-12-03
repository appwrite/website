<script lang="ts">
    export let href: string;
    export let title: string;
    export let text: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;
</script>

<a class="web-link underline" {href} {title} {target} {rel}>{text}</a>
