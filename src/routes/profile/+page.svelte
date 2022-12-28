<script lang="ts">
	import TopNavigation from '$lib/TopNavigation.svelte';
	import ChefProfileImg from '../../assets/images/chef-profile.png';

	let showLeftIcon: boolean = true,
		heading: string = 'Profile',
		showRightIcon: boolean = true;
</script>

<div class="container">
	<TopNavigation {showLeftIcon} {heading} {showRightIcon} />
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
		<div class="profile_desc">
			<h1>Afuwape Abiodun</h1>
			<p>Chef</p>
			<h6>Private Chef Passionate about food and life 🥘🍲🍝🍱 More...</h6>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		padding: 50px 30px;
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

	.profile_desc {
		margin-top: 10px;
	}

	.profile_desc > h1 {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	.profile_desc > p {
		font-size: 12px;
		color: var(--color-gray-2);
	}

	.profile_desc > h6 {
		max-width: 250px;
		margin-top: 10px;
		color: var(--color-gray-3);
		font-size: 14px;
		line-height: 20px;
	}
</style>
