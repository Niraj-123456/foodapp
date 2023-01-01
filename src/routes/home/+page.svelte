<script lang="ts">
	/** @type {import('./$types').PageData} */
	import UserAvatar from '../../assets/images/user_avatar.png';

	import SearchInput from '$lib/SearchInput.svelte';

	let currentCategoryIndex = 0;
	export let data: any;

	const handleCategoryIndexChange = (idx: number) => {
		currentCategoryIndex = idx;
	};
</script>

<div class="container">
	<div class="header">
		<div class="user__name">
			<h1>Hello Jega</h1>
			<p>What are you cooking today?</p>
		</div>
		<div class="user__img">
			<img src={UserAvatar} alt="user-avatar" />
		</div>
	</div>

	<!-- search input -->
	<SearchInput debounce={() => {}} />

	<ul class="catergory__navs">
		{#each data?.areas as area, index}
			<li
				class={currentCategoryIndex === index ? 'active' : ''}
				on:click={() => handleCategoryIndexChange(index)}
				on:keydown
			>
				{area?.strArea}
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 60px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.user__name > h1 {
		font-size: 22px;
		font-weight: 600;
	}

	.user__name > p {
		font-size: 12px;
		color: var(--color-gray-2);
		margin-top: 5px;
	}

	.user__img {
		width: 40px;
		height: 40px;
		background: #ffce80;
		border-radius: 10px;
	}

	.user__img > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.catergory__navs {
		display: flex;
		overflow: auto;
		margin-top: 25px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.catergory__navs::-webkit-scrollbar {
		display: none;
	}

	.catergory__navs li {
		padding: 7px 20px;
		color: var(--color-green-2);
		border-radius: 10px;
	}

	.catergory__navs li.active {
		background: var(--color-green);
		color: var(--color-white);
	}
</style>
