<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Home, Bookmark, Bell, User, Plus } from 'lucide-svelte';
	import { cn } from './utils';

	let options = [
		{ link: '/home', icon: Home },
		{ link: '/saved-recipes', icon: Bookmark },
		{ link: '/add-recipes', icon: Plus },
		{ link: '/notifications', icon: Bell },
		{ link: '/profile', icon: User }
	];

	const handleNavigate = (link: string) => {
		goto(link, { replaceState: false });
	};
</script>

<div class="w-full fixed bottom-0 left-0 py-2 px-8 bg-gray-300">
	<ul class="footer__navs">
		{#each options as option}
			<li class={option?.link === $page.url.pathname ? 'active' : ''}>
				<a href={option?.link}>
					<svelte:component
						this={option.icon}
						class={cn(
							option?.link === '/add-recipes'
								? 'bg-primary text-white w-[48px] h-[48px] p-3 rounded-full'
								: '',
							option.link === $page.url.pathname && option?.link !== '/add-recipes'
								? 'stroke-primary'
								: ''
						)}
					/>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.footer__navs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer__navs li {
		color: var(--color-black-2);
	}

	.footer__navs li:nth-child(3) {
		transform: translateY(-35px);
		border-radius: 50%;
		position: relative;
		border: solid 6px #fff;
	}

	.footer__navs li:nth-child(3)::after,
	.footer__navs li:nth-child(3)::before {
		content: '';
		position: absolute;
		top: 43%;
		width: 20px;
		height: 20px;
		z-index: 2;
	}

	.footer__navs li:nth-child(3)::before {
		left: -23px;
		border-top-right-radius: 20px;
		box-shadow: 1px -8px 0 0 #fff;
	}

	.footer__navs li:nth-child(3)::after {
		right: -23px;
		border-top-left-radius: 20px;
		box-shadow: 0px -8px 0 0 #fff;
	}

	.footer__navs li.active {
		color: var(--color-green);
	}
</style>
