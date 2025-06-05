<script lang="ts">
	import { Bookmark, Timer } from 'lucide-svelte';

	export let recipe: any;
</script>

<div
	class="w-44 max-w-[11rem] h-full bg-gray-200 overflow-hidden rounded-xl flex-shrink-0 flex flex-col shadow-sm"
>
	<div class="relative w-full aspect-square">
		<img
			src={recipe?.strMealThumb}
			alt="recipe"
			class="w-full h-full object-contain object-center absolute inset-0"
		/>
	</div>
	<div class="p-3 flex flex-col gap-4 h-full">
		<p class="text-sm font-semibold line-clamp-2 whitespace-break-spaces">
			{recipe?.strMeal}
		</p>

		<div class="flex justify-between mt-auto align-bottom">
			<div class="flex items-center gap-1 text-gray-400 text-xs">
				<Timer class="w-5 h-5" />
				<span class="text-gray-500 pt-1">15 Mins</span>
			</div>
			<Bookmark class="bg-white rounded-full p-1 text-[#130F26] opacity-70 w-6 h-6" />
		</div>
	</div>
</div>
