<script lang="ts">
	import RecipeVideoCard from '$lib/components/RecipeVideoCard.svelte';
	import RecipieCardWide from '$lib/components/RecipieCardWide.svelte';
	import TopNavigation from '$lib/components/TopNavigation.svelte';
	import { user } from '../../../store/user';

	const navOptions = ['Recipe', 'Videos', 'Tag'];
	let currentOption = 0;
</script>

<div class="main">
	<TopNavigation showLeftIcon={true} heading="Profile" showRightIcon={true} />
	<div class="profile__wrapper">
		<div class="profile">
			<div class="w-12 h-12 aspect-square rounded-full bg-gray-200 overflow-hidden">
				<img
					src={$user?.user_profile.photo_url}
					alt="profile"
					class="w-full h-full aspect-square object-contain"
				/>
			</div>
			<div class="recipe__count">
				Recipe <span>4</span>
			</div>
			<div class="follower__count">
				Followers <span>2.5M</span>
			</div>
			<div class="following__count">
				Following <span>259</span>
			</div>
		</div>
		<div class="profile__desc">
			<h1>Afuwape Abiodun</h1>
			<p>Chef</p>
			<div class="chef__bio">
				<p>Private Chef Passionate about food and life 🥘🍲🍝🍱</p>
				<span>More...</span>
			</div>
		</div>
		<ul class="nav__btns">
			{#each navOptions as option, index}
				<li class={currentOption === index ? 'active' : ''}>
					<button on:click={() => (currentOption = index)}>
						{option}
					</button>
				</li>
			{/each}
		</ul>
		<div class="recipe__card__wrapper">
			{#if currentOption === 0}
				<RecipieCardWide />
				<RecipieCardWide />
				<RecipieCardWide />
				<RecipieCardWide />
				<RecipieCardWide />
				<RecipieCardWide />
			{:else if currentOption === 1}
				<RecipeVideoCard />
				<RecipeVideoCard />
				<RecipeVideoCard />
				<RecipeVideoCard />
				<RecipeVideoCard />
			{/if}
		</div>
	</div>
</div>

<style>
	.main {
		width: 100%;
	}

	.profile__wrapper {
		margin-top: 10px;
	}

	.profile {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.recipe__count,
	.follower__count,
	.following__count {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		color: var(--color-gray-2);
		line-height: 30px;
	}

	.recipe__count > span,
	.follower__count > span,
	.following__count > span {
		font-size: 22px;
		font-weight: 600;
		color: var(--color-black);
	}

	.profile__desc {
		margin-top: 10px;
		min-height: 10px;
	}

	.profile__desc > h1 {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	.profile__desc > p {
		font-size: 12px;
		color: var(--color-gray-2);
	}

	.chef__bio {
		max-width: 250px;
		margin-top: 10px;
	}

	.chef__bio > p,
	.chef__bio > span {
		color: var(--color-gray-3);
		font-size: 14px;
		line-height: 20px;
	}

	.chef__bio > span {
		color: #71b1a1;
	}

	.nav__btns {
		margin-top: 15px;
		padding-block: 13px;
		display: flex;
		justify-content: space-between;
	}

	.nav__btns li {
		color: #71b1a1;
		font-weight: 600;
		border-radius: 10px;
		padding: 10px 28px;
		transition: all 450ms ease-in-out;
	}

	.nav__btns li.active {
		background: #129575;
		color: #fff;
	}

	.recipe__card__wrapper {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
