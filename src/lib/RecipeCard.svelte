<script lang="ts">
	import { Bookmark } from 'lucide-svelte';

	export let recipe: any;
</script>

<div
	class="w-40 max-w-[10rem] h-full bg-gray-200 overflow-hidden rounded-xl flex-shrink-0 flex flex-col shadow-sm"
>
	<div class="relative w-full aspect-square">
		<img
			src={recipe?.strMealThumb}
			alt="recipe"
			class="w-full h-full object-contain object-center absolute inset-0"
		/>
	</div>
	<div class="p-3 flex flex-col gap-4 h-full">
		<p class="text-sm font-semibold text-center line-clamp-2">
			{recipe?.strMeal}
		</p>

		<div class="flex justify-between mt-auto align-bottom">
			<div class="capitalize flex flex-col gap-1 text-gray-400 text-xs">
				<div class="text-gray-400">Time</div>
				<div class="text-gray-500">15 Mins</div>
			</div>
			<Bookmark class="bg-white rounded-full p-1 text-[#130F26] opacity-70 w-6 h-6" />
		</div>
	</div>
</div>
