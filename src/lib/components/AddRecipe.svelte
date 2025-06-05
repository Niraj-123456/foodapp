<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Button } from '$lib/components/ui/button/index';
	import { isDesktop } from '../../store/media-query';
	import AddRecipeForm from './common/AddRecipeForm.svelte';

	export let open: boolean;
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add Recipe</Dialog.Title>
			</Dialog.Header>

			<div class="p-4 h-full w-full">
				<form
					on:submit|preventDefault={() => console.log('form submitted')}
					class="flex flex-col gap-4 h-full"
				>
					<AddRecipeForm />
					<div class="flex gap-4 items-end flex-1">
						<Dialog.Close asChild let:builder>
							<Button builders={[builder]} variant="outline" class="w-full">Cancel</Button>
						</Dialog.Close>
						<Button class="w-full" type="submit">Save</Button>
					</div>
				</form>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Add Recipe</Drawer.Title>
			</Drawer.Header>

			<div class="p-4 h-full w-full">
				<form
					on:submit|preventDefault={() => console.log('form submitted')}
					class="flex flex-col gap-4 h-full"
				>
					<AddRecipeForm />

					<div class="flex gap-4 items-end flex-1">
						<Drawer.Close asChild let:builder>
							<Button builders={[builder]} variant="outline" class="w-full">Cancel</Button>
						</Drawer.Close>
						<Button class="w-full" type="submit">Save</Button>
					</div>
				</form>
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
