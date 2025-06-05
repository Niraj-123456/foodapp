<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount, tick } from 'svelte';
	import { trapFocus } from '../../../../utils/helper/focusTrap';

	export let open: boolean,
		onClose: () => void = () => {};

	let dialogRef: HTMLDivElement,
		originalPushState: typeof history.pushState,
		historyStateAdded = false;

	$: console.log('original push state', originalPushState);

	$: console.log('history state added', historyStateAdded);

	onMount(() => {
		if (!browser) return;

		originalPushState = history.pushState;

		history.pushState = function (...args) {
			if (open) {
				historyStateAdded = true;
			}

			return originalPushState.apply(history, args);
		};

		window.addEventListener('popstate', handlePopState);
		window.addEventListener('keydown', handleEscape);

		if (open) {
			addHistoryState();
			trapFocus(dialogRef);
		}
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('popstate', handlePopState);
		window.removeEventListener('keydown', handleEscape);

		history.pushState = originalPushState;

		if (historyStateAdded) {
			window.history.back();
		}
	});

	const handlePopState = (e: PopStateEvent) => {
		if (e.state?.dialogOpen) {
			closeDialog();
		}
	};

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && open) {
			closeDialog();
		}
	};

	const addHistoryState = () => {
		if (!historyStateAdded) {
			console.log('I am here');
			window.history.pushState({ dialogOpen: true }, '');
			historyStateAdded = true;
		}
	};

	const removeHistoryState = () => {
		if (historyStateAdded) {
			window.history.back();
			historyStateAdded = false;
		}
	};

	const closeDialog = () => {
		open = false;
		onClose();
		removeHistoryState();
	};

	$: if (browser) {
		if (open) {
			addHistoryState();
			tick().then(() => trapFocus(dialogRef));
		} else if (historyStateAdded) {
			removeHistoryState();
		}
	}
</script>

<svelte:window on:keydown={handleEscape} />

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
	class:invisible={!open}
	class:opacity-0={!open}
	class:visible={open}
	class:opacity-100={open}
	on:click|self={closeDialog}
	bind:this={dialogRef}
>
	<div
		class="relative max-h-[90vh] overflow-y-auto rounded-lg bg-background p-6 shadow-lg"
		role="dialog"
		aria-modal="true"
		aria-labelledby="dialog-title"
	>
		<slot />
	</div>
</div>
