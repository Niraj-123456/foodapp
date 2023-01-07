<script lang="ts">
	import { goto } from '$app/navigation';
	import { Icon, Home, Bookmark, Bell, User, Plus } from 'svelte-hero-icons';

	let currentIndex = 0;

	const handleNavigate = (idx: number, link: string) => {
		console.log(idx, link);
		currentIndex = idx;
		goto(link);
	};
</script>

<div class="container">
	<ul class="footer__navs">
		<li
			class={currentIndex === 0 ? 'active' : ''}
			on:click={() => handleNavigate(0, '/home')}
			on:keydown
		>
			<Icon src={Home} size="30px" />
		</li>
		<li
			class={currentIndex === 1 ? 'active' : ''}
			on:click={() => handleNavigate(1, '/saved-recipes')}
			on:keydown
		>
			<Icon src={Bookmark} size="30px" />
		</li>
		<li class="add">
			<Icon
				src={Plus}
				size="28px"
				solid
				class="bg-[#129575] text-white w-[48px] h-[48px] p-2 rounded-full"
			/>
		</li>
		<li
			class={currentIndex === 2 ? 'active' : ''}
			on:click={() => handleNavigate(2, '/notifications')}
			on:keydown
		>
			<Icon src={Bell} size="30px" />
		</li>
		<li
			class={currentIndex === 3 ? 'active' : ''}
			on:click={() => handleNavigate(3, '/profile')}
			on:keydown
		>
			<Icon src={User} size="30px" />
		</li>
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

	.footer__navs li.active {
		color: var(--color-green);
	}

	.add {
		margin-top: -100px;
		/* position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%); */
		box-shadow: -0px 5px 8px 2px rgba(108, 108, 108, 0.08);
		border: solid 5px #ffffff;
		border-radius: 50%;
	}
</style>
