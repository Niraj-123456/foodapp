<script lang="ts">
	import { goto } from '$app/navigation';
	import { ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import ChefHatIcon from '../assets/images/chef_hat.png';

	import Button from '$lib/components/ui/button/button.svelte';
	import { miniAppInitializer } from '../miniAppInitializer';

	let isLogin,
		canRender = false;
	let errMsg;

	const handleInit = () => {
		miniAppInitializer()
			.then((user: any) => {
				if (user?.user_profile) {
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

<div class="main">
	<div class="flex flex-col justify-between items-center text-white text-center h-full">
		<div class="cta__heading">
			<img src={ChefHatIcon} alt="chef-cap" />
			<p class="text-lg font-medium">100k+ Premium Recipes</p>
		</div>
		<div>
			<div>
				<h1 class="font-semibold text-5xl leading-tight">Get Cooking</h1>
				<p class="pt-5">Simple way to find Tasty Recipe</p>
			</div>
			<div class="mt-16 w-full">
				<Button
					size="lg"
					on:click={() => goto('/login')}
					class="px-4 py-5 w-full font-medium text-lg h-14"
				>
					{'Start Cooking'}
					<ArrowRight class="ml-3 w-5 h-5" />
				</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		width: 100%;
		height: 100vh;
		background: linear-gradient(179.98deg, rgba(0, 0, 0, 0.4) 90%, #000000 99.99%),
			url('../assets/images/splash.png');
		background-size: contain;
		padding-block: 104px 95px;
		padding-inline: 78px;
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
</style>
