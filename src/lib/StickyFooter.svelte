<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Icon, Home, Bookmark, Bell, User, Plus } from 'svelte-hero-icons';

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
	console.log('page', $page.url.pathname);
</script>

<div class="main">
	<ul class="footer__navs">
		{#each options as option}
			<li
				on:click={() => handleNavigate(option?.link)}
				class={option?.link === $page.url.pathname ? 'active' : ''}
				on:keydown
			>
				<Icon
					src={option?.icon}
					size="25px"
					class={option?.link === '/add-recipes'
						? 'bg-[#129575] text-white w-[48px] h-[48px] p-3 rounded-full'
						: ''}
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
	.main {
		width: 100%;
		position: sticky;
		bottom: 0;
		left: 0;
		padding: 20px 20px;
		margin-top: 20px;
		background: #f5f5f5;
	}

	.footer__navs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer__navs li {
		color: var(--color-black-2);
	}

	.footer__navs li:nth-child(3) {
		margin-top: -65px;
		border-radius: 50%;
		position: relative;
		border: solid 5px #fff;
	}

	.footer__navs li:nth-child(3)::after,
	.footer__navs li:nth-child(3)::before {
		content: '';
		position: absolute;
		top: 50%;
		width: 20px;
		height: 20px;
		background: transparent;
	}

	.footer__navs li:nth-child(3)::before {
		left: -40%;
		border-top-right-radius: 20px;
		box-shadow: 0 -10px 0 0 #fff;
	}

	.footer__navs li:nth-child(3)::after {
		right: -42%;
		border-top-left-radius: 20px;
		box-shadow: 0px -10px 0 0 #fff;
	}

	.footer__navs li.active {
		color: var(--color-green);
	}
</style>
