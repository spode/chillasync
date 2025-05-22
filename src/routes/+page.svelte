<script>
	import { onMount } from 'svelte';
	import ResolvedApp from './ResolvedApp.svelte';
	let { data } = $props();

	// STATES
	// let count = $state(data.count);

	// OUTPUT
	// $inspect(data);
	// $effect(() => {
	// 	setInterval(() => {
	// 		count -= 1;
	// 	}, 1000);
	// });

	let player = $state();

	onMount(() => {
		player = new YT.Player('denkPlayer', {
			height: '390',
			width: '640'
		});
	});
</script>

<svelte:boundary>
	<ResolvedApp videos={data.videos} {player} />

	{#snippet pending()}
		<div class="flex flex-1 flex-col items-center justify-center gap-5">
			<p class="p-2 text-9xl">🐧</p>
			<p>loading songs...</p>
			<!-- <p>loading songs... {count}</p> -->
		</div>
	{/snippet}
</svelte:boundary>

<iframe
	allowfullscreen
	id={'denkPlayer'}
	class="h-full w-full flex-1"
	src="https://www.youtube.com/embed/{'4xDzrJKXOOY'}?enablejsapi=1"
	title="ytIframe"
></iframe>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
