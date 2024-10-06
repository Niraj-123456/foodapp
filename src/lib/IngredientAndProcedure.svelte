<script lang="ts">
	import Platter from '../assets/icons/platter.svg';
	import Tomato from '../assets/images/tomato.png';

	export let ingredients: string[];
	export let procedures: string[];
	export let measurements: string[];

	const options = [
		{ id: 1, value: 'ingredient' },
		{ id: 2, value: 'procedure' }
	];

	let index = 1;
	const handleIndexChange = (idx: number) => {
		index = idx;
	};
</script>

<div class="main">
	<ul class="inge__proced__btns">
		{#each options as option}
			<li class={index === option?.id ? 'active' : ''}>
				<span role="button" tabindex="-1" on:click={() => handleIndexChange(option?.id)} on:keydown>
					{option?.value}
				</span>
			</li>
		{/each}
	</ul>

	<div class="serving__items">
		<div class="serving">
			<img src={Platter} alt="" width="22px" height="22px" />
			<div>{1} Serve</div>
		</div>

		<div>{index === 1 ? `${ingredients.length} Items` : `${procedures.length} Steps`}</div>
	</div>

	<div class="inge__proced">
		{#if index === 1}
			<div class="ingredients">
				{#each ingredients as ingredient, index}
					<div class="ingredient">
						<div class="ingredient__name__img">
							<img src={Tomato} alt="ingre-name" width="52px" height="52px" />
							<span>{ingredient}</span>
						</div>
						<div class="ingre__measurement">{measurements[index]}</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="procedures">
				{#each procedures as procedure, index}
					<div class="procedure">
						<div>Step {index + 1}</div>
						<p>
							{procedure}.
						</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes slideFromLeft {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0%);
		}
	}

	.main {
		margin-top: 10px;
	}

	.inge__proced__btns {
		@apply py-3 flex justify-between;
	}

	.inge__proced__btns > li {
		@apply text-primary py-2 px-12 text-base font-bold capitalize rounded-lg transition-all duration-300 ease-in-out;
	}

	.inge__proced__btns > li.active {
		@apply bg-primary text-white;
	}

	.serving__items {
		@apply mt-8 flex items-center justify-between text-gray-500 text-sm;
	}

	.serving {
		@apply flex gap-1 items-center;
	}

	.inge__proced {
		margin-top: 25px;
	}

	.ingredients,
	.procedures {
		animation: slideFromLeft 1s;
	}

	.ingredient {
		display: flex;
		align-items: center;
	}

	.ingredient,
	.procedure {
		border-radius: 12px;
		padding: 12px 15px;
		background: var(--color-light-gray);
		margin-bottom: 10px;
	}

	.ingredient__name__img {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.ingredient__name__img > img {
		background: var(--color-white);
		padding: 6px;
		border-radius: 10px;
	}

	.ingredient__name__img > span {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	.ingre__measurement {
		margin-left: auto;
		font-size: 16px;
		color: var(--color-gray-2);
	}

	.procedure > div {
		font-size: 16px;
		font-weight: 600;
	}

	.procedure > p {
		margin-top: 5px;
		font-size: 14px;
		color: var(--color-gray-2);
		text-align: justify;
		line-height: 18px;
	}
</style>
