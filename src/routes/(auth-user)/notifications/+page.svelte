<script lang="ts">
	import { FileText } from 'lucide-svelte';
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

<div class="main">
	<TopNavigation
		showLeftIcon={true}
		heading="Notifications"
		showRightIcon={false}
		open={openRecipeShareDialog}
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
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

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>New Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
				<div class="notification__card">
					<div class="card__content">
						<h3>Saved Recipe Alert!</h3>
						<p>Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum</p>
						<span>10 mins ago</span>
					</div>

					<FileText class="bg-[#FFE1B3] text-[#FF9C00] rounded-[10px] h-[28px] w-[58px] p-[3px]" />
				</div>
			</div>
		</div>
	{/if}
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
	.main {
		width: 100%;
	}

	.notification__navs {
		margin-top: 10px;
	}

	.notification__navs ul {
		padding-block: 12px;
		display: flex;
		justify-content: space-between;
	}

	.notification__navs ul li {
		@apply py-2 px-9 text-primary/80 rounded-[10px];
	}

	.notification__navs ul li.active {
		@apply bg-primary text-white;
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
		@apply bg-gray-100 rounded-xl py-3 px-4 flex gap-7;
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
