<script lang="ts">
	import { Icon, Bookmark } from 'svelte-hero-icons';

	export let recipe: any;
</script>

<div class="card">
	<img src={recipe?.strMealThumb} alt="recipe" />
	<div class="card__content">
		<p>{recipe?.strMeal}</p>
		<div class="time__bookmark">
			<div class="time">
				Time
				<span>15 Mins</span>
			</div>
			<span
				><Icon
					src={Bookmark}
					size="25px"
					class="bg-white rounded-full p-1 text-[#130F26] opacity-70"
				/></span
			>
		</div>
	</div>
</div>

<style>
	.card {
		width: 150px;
		background: var(--color-gray);
		overflow: hidden;
		border-radius: 12px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
	}

	.card > img {
		width: 100%;
		height: 120px;
		object-fit: cover;
	}

	.card__content {
		padding: 10px;
	}

	.card__content > p {
		display: block;
		font-size: 14px;
		font-weight: 600;
		text-align: center;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		line-height: 21px;
		margin: auto;
		padding-inline: 10px;
	}

	.time__bookmark {
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.time {
		text-transform: capitalize;
		display: flex;
		flex-direction: column;
		gap: 5px;
		color: var(--color-gray-2);
		font-size: 12px;
	}

	.time > span {
		color: #484848;
	}
</style>
