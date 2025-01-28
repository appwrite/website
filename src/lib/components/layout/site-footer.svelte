<script lang="ts">
    import FooterNav from '$lib/components/layout/footer-nav.svelte';
    import SubFooter from '$lib/components/layout/sub-footer.svelte';
    import { classNames } from '$lib/utils/classnames';

    let className: string = '';
    export { className as class };
</script>

<div class={classNames('border-smooth border-t', className)}>
    <FooterNav />
    <SubFooter />
</div>
