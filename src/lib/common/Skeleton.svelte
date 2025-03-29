<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton/index';
	import { cn } from '$lib/utils';

	let className: string = '';

	export { className as class };
</script>

<Skeleton class={cn('w-12 h-12 flex-shrink-0 flex shadow-sm', className)} />
