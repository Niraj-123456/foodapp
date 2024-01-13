<script lang="ts">
	import TopNavigation from '$lib/TopNavigation.svelte';
	import ShareRecipeModal from '$lib/ShareRecipeModal.svelte';
	import ChefProfileImg from '../../assets/images/chef-profile.png';
	import RecipieCardWide from '$lib/RecipieCardWide.svelte';
	import RecipeVideoCard from '$lib/RecipeVideoCard.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';

	let openRecipeShareDialog: boolean = false;
	const navOptions = ['Recipe', 'Videos', 'Tag'];

	const handleOpenRecipeShareDialog = () => {
		openRecipeShareDialog = true;
	};

	const handleCloseRecipeShareDialog = () => {
		openRecipeShareDialog = false;
	};

	let currentOption = 0;
</script>

<div class="container">
	<TopNavigation
		showLeftIcon={true}
		heading="Profile"
		showRightIcon={true}
		{handleOpenRecipeShareDialog}
	/>
	<div class="profile__wrapper">
		<div class="profile">
			<img src={ChefProfileImg} alt="profile" class="profile__img" />
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
				<li
					class={currentOption === index ? 'active' : ''}
					on:click={() => (currentOption = index)}
					on:keydown
				>
					{option}
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
	<ShareRecipeModal {openRecipeShareDialog} {handleCloseRecipeShareDialog} />
	<StickyFooter />
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 120px;
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

	.profile__img {
		width: 89px;
		height: 89px;
		border-radius: 50%;
		object-fit: contain;
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
