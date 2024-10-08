<script>
	import { Star, Clock } from 'lucide-svelte';

	import RecipeOwner from '../assets/images/recipe_owner.png';
	import NewRecipeImg from '../assets/images/new_recipe_1.png';
</script>

<div class="w-72 shadow-custom rounded-[10px] p-3 relative flex flex-col flex-shrink-0">
	<img
		src={NewRecipeImg}
		alt="new-recipe"
		class="w-20 h-20 object-cover object-center rounded-full absolute -top-11 right-3"
	/>

	<div class="mt-3">
		<h1 class="max-w-52 font-medium overflow-hidden text-ellipsis whitespace-nowrap">
			Steak with tomato
		</h1>
		<span class="mt-2 flex">
			{#each [1, 2, 3, 4, 5] as star}
				<Star class="text-[#FFAD30] w-4 h-4" />
			{/each}
		</span>
		<div class="mt-3 flex justify-between">
			<div class="flex gap-3 items-center">
				<img src={RecipeOwner} alt="owner" class="w-6 h-6 rounded-full object-cover" />
				<p class="text-xs text-gray-500">By James Milner</p>
			</div>
			<div class="text-gray-500 flex gap-2 text-xs">
				<Clock class="w-4 h-4" />
				<span>15 Mins</span>
			</div>
		</div>
	</div>
</div>
