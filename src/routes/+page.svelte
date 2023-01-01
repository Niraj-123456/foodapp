<script lang="ts">
	import ChefHatIcon from '../assets/images/chef_hat.png';
	import { ArrowRight } from 'svelte-hero-icons';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Button from '$lib/Button.svelte';
	import { miniAppInitializer } from '../miniAppInitializer';

	let isLogin,
		canRender = false;
	let errMsg;

	const handleInit = () => {
		miniAppInitializer()
			.then((user: any) => {
				if (user?.user_profile) {
					console.log(user?.user_profile);
					isLogin = true;
					canRender = true;
					goto('/profile');
				} else {
					goto('/');
				}
			})
			.catch((e) => {
				errMsg = e.message;
				isLogin = false;
				canRender = false;
			});
	};

	onMount(() => {
		handleInit();
	});
</script>

<div class="container">
	<div class="content">
		<div class="cta__heading">
			<img src={ChefHatIcon} alt="chef-cap" />
			<p>100+ Premium Recipe</p>
		</div>
		<div class="cta__desc">
			<h1>Get Cooking</h1>
			<p>Simple way to find Tasty Recipe</p>
		</div>
		<div class="cta__btn">
			<Button
				type="button"
				label={'Start Cooking'}
				icon={ArrowRight}
				onClick={() => goto('/login')}
			/>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100vh;
		background: linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 0.01%, #000000 99.99%),
			url('../assets/images/splash.png');
		padding-block: 104px 95px;
		padding-inline: 50px;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		text-align: center;
	}

	.cta__heading {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}

	.cta__heading img {
		width: 79px;
	}

	.cta__desc {
		margin-top: 130px;
	}

	.cta__desc > h1 {
		font-size: 50px;
		line-height: 1.2;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.cta__btn {
		margin-top: 64px;
	}
</style>
