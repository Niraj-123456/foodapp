<script lang="ts">
	import { cn } from '$lib/utils';

	export let containerClass: string = '';
</script>

<div class="wrapper max-w-[calc(410px-24px)] overflow-auto">
	<div class={cn('w-full h-auto mt-2 pt-4 flex flex-nowrap gap-5', containerClass)}>
		<slot />
	</div>
</div>

<style>
	.wrapper::-webkit-scrollbar {
		display: none;
	}
</style>
