<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import UploadImage from '$lib/UploadImage.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class="border border-black">Open Dialog</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Upload Image</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<UploadImage />
	</Dialog.Content>
</Dialog.Root>
