<script lang="ts">
	import { goto } from '$app/navigation';
	import { Icon, Home, Bookmark, Bell, User, Plus } from 'svelte-hero-icons';

	let currentIndex = 1;
	let options = [
		{ id: 1, link: '/home', icon: Home },
		{ id: 2, link: '/saved-recipes', icon: Bookmark },
		{ id: 3, link: '/add-recipes', icon: Plus },
		{ id: 4, link: '/notifications', icon: Bell },
		{ id: 5, link: '/profile', icon: User }
	];

	const handleNavigate = (idx: number, link: string) => {
		currentIndex = idx;
		goto(link, { replaceState: false });
	};
</script>

<div class="container">
	<ul class="footer__navs">
		{#each options as option}
			<li
				class={currentIndex === option?.id ? 'active' : ''}
				on:click={() => handleNavigate(option?.id, option?.link)}
				on:keydown
			>
				<Icon
					src={option?.icon}
					size="20px"
					class={option?.id === 3
						? 'bg-[#129575] text-white w-[48px] h-[48px] p-3 rounded-full'
						: ''}
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30px 50px;
		margin-top: 20px;
		background: var(--color-white);
		box-shadow: 0px 0px 8px rgba(108, 108, 108, 0.08);
		mask-composite: subtract;
	}

	.footer__navs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer__navs li {
		color: var(--color-gray);
	}

	.footer__navs li:nth-child(3) {
		margin-top: -85px;
		/* position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%); */
		box-shadow: -0px 5px 8px 2px rgba(108, 108, 108, 0.08);
		border: solid 5px #ffffff;
		border-radius: 50%;
	}

	.footer__navs li.active {
		color: var(--color-green);
	}
</style>
