<script lang="ts">
	import { Icon, DocumentText } from 'svelte-hero-icons';
	import TopNavigation from '$lib/TopNavigation.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';
	import ShareRecipeModal from '$lib/ShareRecipeModal.svelte';

	let options = ['All', 'Read', 'Unread'];
	let currentOption: number = 0;
	let openRecipeShareDialog: boolean = false;

	const handleOpenRecipeShareDialog = () => {
		openRecipeShareDialog = true;
	};
</script>

<div class="container">
	<TopNavigation
		showLeftIcon={true}
		heading="Notifications"
		showRightIcon={false}
		{handleOpenRecipeShareDialog}
	/>

	<div class="notification__navs">
		<ul>
			{#each options as option, index}
				<li
					class={currentOption === index ? 'active' : ''}
					on:click={() => (currentOption = index)}
					on:keydown
				>
					{option}
				</li>
			{/each}
		</ul>
	</div>

	{#if currentOption === 0}
		<div class="notifications">
			<div class="notification__card__wrapper">
				<h1>Today</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
			<div class="notification__card__wrapper">
				<h1>Yesterday</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
		</div>
	{:else if currentOption === 1}
		<div class="notifications">
			<div class="notification__card__wrapper">
				<h1>Today</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
			<div class="notification__card__wrapper">
				<h1>Yesterday</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
		</div>
	{:else}
		<div class="notifications">
			<div class="notification__card__wrapper">
				<h1>Today</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
			<div class="notification__card__wrapper">
				<h1>Yesterday</h1>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<Icon
						src={DocumentText}
						size="25px"
						class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]"
					/>
				</div>
			</div>
		</div>
	{/if}

	<StickyFooter />
</div>

<style>
	@keyframes slideFromLeft {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0%);
		}
	}
	.container {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 120px;
	}

	.notification__navs {
		margin-top: 10px;
		margin-left: -10px;
		margin-right: -10px;
	}

	.notification__navs ul {
		padding-block: 12px;
		display: flex;
		justify-content: space-between;
	}

	.notification__navs ul li {
		padding: 8px 35px;
		color: var(--color-green-2);
		border-radius: 10px;
	}

	.notification__navs ul li.active {
		background: var(--color-green);
		color: var(--color-white);
	}

	.notifications,
	.notification__card__wrapper {
		margin-top: 10px;
	}

	.notification__card__wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
		animation: slideFromLeft 750ms linear;
	}

	.notification__card__wrapper > h1 {
		text-align: center;
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
	}

	.notification__card {
		background: var(--color-gray);
		border-radius: 12px;
		padding: 10px 15px;
		display: flex;
		gap: 26px;
	}

	.card__content > h3 {
		font-size: 13px;
		font-weight: 600;
		line-height: 16px;
	}

	.card__content > p {
		margin-top: 5px;
		font-size: 12px;
		color: var(--color-gray-2);
		line-height: 16px;
	}

	.card__content > span {
		font-size: 8px;
		color: var(--color-gray-2);
	}
</style>
