<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Home, Bookmark, Bell, User, Plus } from 'lucide-svelte';
	import { cn } from './utils';

	let options = [
		{ link: '/', label: 'Home', icon: Home },
		{ link: '/saved-recipes', label: 'Bookmark', icon: Bookmark },
		{ link: '/add-recipes', label: '', icon: Plus },
		{ link: '/notifications', label: 'Notifications', icon: Bell },
		{ link: '/profile', label: 'Profile', icon: User }
	];
</script>

<div class="w-full fixed bottom-0 left-0 py-4 px-8 bg-white border border-gray-300 rounded-t-xl">
	<ul class="flex justify-between items-center">
		{#each options as option}
			<li>
				<a
					href={option?.link}
					class={cn(
						option?.link === $page.url.pathname ? 'text-primary' : 'text-gray-700',
						'flex flex-col items-center gap-1'
					)}
				>
					<svelte:component
						this={option.icon}
						class={cn(
							option?.link === '/add-recipes'
								? 'bg-primary text-white w-[52px] h-[52px] p-2 rounded-full absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4'
								: '',
							option.link === $page.url.pathname && option?.link !== '/add-recipes'
								? 'stroke-primary'
								: ''
						)}
					/>
					<span class="text-xs">{option.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
