<script lang="ts">
  import { onMount } from 'svelte';

  let fileInput: HTMLInputElement;
  let dragActive = false;

  const handleDrag = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragover") {
          dragActive = true;
      } else if (e.type === "dragleave" || e.type === "drop") {
          dragActive = false;
      }
  };

  const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragActive = false;
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFile(e.dataTransfer.files[0]);
      }
  };

  const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
          handleFile(target.files[0]);
      }
  };

  const handleFile = (file: File) => {
      // Handle the file here
      console.log(file);
  };

  const openFilePicker = () => {
      fileInput.click();
  };

  onMount(() => {
      document.addEventListener('dragover', handleDrag);
      document.addEventListener('drop', handleDrop);
  });
</script>

<button
  class="web-input-text u-width-full-line" type="button"
  class:drag-active={dragActive}
  aria-label="File upload area. Drop a file here or click to select a file."
  on:drop|preventDefault={handleDrop}
  on:dragover|preventDefault={handleDrag}
  on:dragleave={handleDrag}
  on:click={openFilePicker}>
  
  <slot></slot> <!-- Placeholder for custom content -->

  <input
      style="display: none"
      type="file"
      bind:this={fileInput}
      hidden
      on:change={handleChange} />
</button>
