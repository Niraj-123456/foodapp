<script lang="ts">
	import Input from './components/ui/input/input.svelte';
	import Label from './components/ui/label/label.svelte';

	export let label: string;
	export let type: string = 'text';
	export let id: string;
	export let name: string;
	export let placeholder: string;
	export let value: any;
	export let hasError: boolean;
	export let errorMsg: string;

	$: hasError;
	console.log('has error', hasError);
</script>

<div class="w-full flex flex-col gap-3 mt-8">
	{#if label} <Label for={id} class="text-gray-700">{label}</Label> {/if}
	<Input
		{type}
		{name}
		{id}
		{placeholder}
		bind:value
		class={hasError ? 'border-red-600' : 'h-12 placeholder:text-gray-400'}
	/>
	{#if hasError && errorMsg}
		<p class="text-red-600 text-sm">
			{errorMsg}
		</p>
	{/if}
</div>
