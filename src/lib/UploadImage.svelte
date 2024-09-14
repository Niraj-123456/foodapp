<script lang="ts">
	import ImageSalon, { type ImageUploadResponse } from 'image-salon-sdk';
	import { onMount } from 'svelte';
	import { CloudUpload } from 'lucide-svelte';

	let images: ImageUploadResponse[] = [];

	const imageSalon = new ImageSalon({
		handleUpload: () => {
			handleUploadImage();
		},
		mode: 'development',
		parentContainerId: 'image-upload-main',
		enableMultiSelect: true
	});

	const handleUploadImage = () => {
		imageSalon._upload().then((res: ImageUploadResponse[]) => {
			console.log('res', res);
			images = [...images, ...res];
		});
	};
</script>

<div class="w-full h-full grid place-items-center p-5">
	<div id="image-upload-main" />
	<div class="grid grid-cols-4 mt-6 gap-4">
		{#each images as image}
			<div class="w-56 h-44 relative p-2 bg-gray-700">
				<img
					src={image?.url}
					alt={image?.name}
					class="absolute top-0 left-0 w-full h-full object-contain object-center"
				/>
			</div>
		{/each}
	</div>
</div>
