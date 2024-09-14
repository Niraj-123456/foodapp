<script lang="ts">
	import { Star } from 'lucide-svelte';

	export let food: any;
</script>

<div class="main">
	<img src={food?.strMealThumb} alt={food?.strMeal} />
	<div class="content__wrapper">
		<div class="rating">
			<span
				><Star class="text-[#FFAD30] w-4 h-4" />
				<p>4.0</p></span
			>
		</div>

		<div class="content">
			<h1>{food?.strMeal}</h1>
			<p>{food?.strCategory}</p>
		</div>
	</div>
</div>

<style>
	.main {
		width: 150px;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

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

	.rating {
		display: flex;
		justify-content: flex-end;
	}

	.rating > span {
		display: flex;
		align-items: center;
		gap: 4px;
		background: #ffe1b3;
		border-radius: 20px;
		padding: 1px 7.5px;
	}

	.rating > span > p {
		font-size: 10px;
	}

	.content {
		color: #fff;
	}

	.content > h1 {
		font-size: 12px;
		font-weight: 600;
		line-height: 16px;
	}

	.content > p {
		margin-top: 3px;
		font-size: 9px;
		color: var(--color-gray);
	}
</style>
