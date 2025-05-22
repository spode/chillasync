<script>
	let { videos, player } = $props();
	let videosResolved = $derived(await videos);

	let currentVideo = $state.raw();
</script>

<div class="flex flex-1 flex-col gap-1 overflow-auto">
	{#each videosResolved as video}
		<button
			class="flex cursor-pointer items-center rounded text-left text-xl {currentVideo == video
				? 'bg-gray-600'
				: 'bg-gray-800'}"
			onclick={() => {
				player.loadVideoById(video.id.videoId);
				currentVideo = video;
			}}
		>
			<img
				class="aspect-square w-[100px] object-cover"
				src={video.snippet.thumbnails.medium.url}
				alt=""
			/>
			<p class="p-2">{video.snippet.title}</p>
		</button>
	{/each}
</div>
