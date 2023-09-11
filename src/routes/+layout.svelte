<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="md:px-32 md:py-10">
  <slot />
</div>
