<script lang="ts">
  import Button from "./ui/Button.svelte";
  import { PUBLIC_APPWRITE_DASHBOARD } from "$env/static/public";

  export let classes = "";
</script>

<Button class={classes} href={PUBLIC_APPWRITE_DASHBOARD}>
  <span class="hidden [data-logged-in]:block"
    ><slot name="isLoggedIn">Go to Console</slot></span
  >
  <span class="btton [data-logged-in]:hidden"
    ><slot name="isNotLoggedIn">Get started</slot></span
  >
</Button>

<style lang="scss">
  :global(body[data-logged-in]) {
    .logged-in {
      display: block;
    }
    .not-logged-in {
      display: none;
    }
  }
  .not-logged-in {
    display: block;
  }
  .logged-in {
    display: none;
  }
</style>
