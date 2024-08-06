<script lang="ts">
  import Button from "./Button.svelte";

  export let classes = "";
</script>

<Button class={classes}>
  <span class="hidden [data-logged-in]:block"
    ><slot name="isLoggedIn">Go to Console</slot></span
  >
  <span class="block [data-logged-in]:hidden"
    ><slot name="isNotLoggedIn">Get started</slot></span
  >
</Button>
