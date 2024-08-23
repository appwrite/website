<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  type $$Props = {
    label?: string;
  } & HTMLInputAttributes;

  export let label: $$Props["label"] = "";
  export let value: $$Props["value"] = "";
</script>

<label>
  {label}
  <input {value} {...$$restProps} />
</label>
