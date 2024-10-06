<script lang="ts">
	import { Star } from 'lucide-svelte';

	export let food: any;
</script>

<div class="w-full h-full rounded-[10px] overflow-hidden relative">
	<img src={food?.strMealThumb} alt={food?.strMeal} />
	<div class="content__wrapper">
		<div class="flex justify-end">
			<span class="flex items-center gap-1 bg-[#ffe1b3] rounded-[20px] py-[1px] px-[7.5px]"
				><Star class="text-[#FFAD30] w-4 h-4" />
				<p class="text-[10px]">4.0</p></span
			>
		</div>

		<div class="text-white">
			<h1 class="text-base font-semibold leading-[16px]">{food?.strMeal}</h1>
			<p class="text-gray-300 text-xs mt-1">{food?.strCategory}</p>
		</div>
	</div>
</div>

<style>
	.content__wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
