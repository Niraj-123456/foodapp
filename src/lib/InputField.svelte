<script lang="ts">
	import Input from './components/ui/input/input.svelte';
	import Label from './components/ui/label/label.svelte';
	import { cn } from './utils';

	export let label: string;
	export let type: string = 'text';
	export let id: string;
	export let name: string;
	export let placeholder: string;
	export let value: any;
	export let inputClass: string | undefined = '';

	export let hasError: boolean | undefined = false;
	export let errorMsg: string | undefined = '';
</script>

<div class="w-full flex flex-col gap-3 mt-5">
	{#if label}
		<Label for={id} class={cn(hasError ? 'text-red-600' : 'text-gray-500')}>{label}</Label>
	{/if}
	<Input
		{type}
		{name}
		{id}
		{placeholder}
		bind:value
		class={cn('h-12 placeholder:text-gray-300', hasError ? 'border-red-600' : '', inputClass)}
	/>
	{#if hasError && errorMsg}
		<p class="text-red-600 text-xs">
			{errorMsg}
		</p>
	{/if}
</div>
