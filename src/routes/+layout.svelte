<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex h-full flex-col">
	{@render children()}
</main>
