<script lang="ts">
	import Cover from '../assets/images/cover.png';
	import Tomato from '../assets/images/tomato.png';

	export let ingredients: [];
	export let procedures: [];
	export let measurements: [];

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
			<li
				class={index === option?.id ? 'active' : ''}
				on:click={() => handleIndexChange(option?.id)}
				on:keydown
			>
				{option?.value}
			</li>
		{/each}
	</ul>

	<div class="serving__items">
		<div class="serving">
			<img src={Cover} alt="icon" width="25px" height="25px" />
			<span>{1} Serve</span>
		</div>
		<div class="items">
			<span> {index === 1 ? `${ingredients.length} Items` : `${procedures.length} Steps`}</span>
		</div>
	</div>

	<div class="inge__proced">
		{#if index === 1}
			<div class="ingredients">
				{#each ingredients as ingredient}
					<div class="ingredient">
						<div class="ingredient__name__img">
							<img src={Tomato} alt="ingre-name" width="52px" height="52px" />
							<span>{ingredient}</span>
						</div>
						<div class="ingre__measurement">500g</div>
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
		padding-block: 13px;
		display: flex;
		justify-content: space-between;
	}

	.inge__proced__btns > li {
		color: var(--color-green-2);
		padding: 12px 30px;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 600;
		line-height: 16px;
		text-transform: capitalize;
	}

	.inge__proced__btns > li.active {
		background: var(--color-green);
		color: var(--color-white);
		transition: all 450ms ease-in-out;
	}

	.serving__items {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		color: var(--color-gray-2);
		font-size: 14px;
	}

	.serving {
		display: flex;
		gap: 5px;
		align-items: center;
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
		background: var(--color-gray);
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
