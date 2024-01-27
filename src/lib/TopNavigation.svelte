<script lang="ts">
	import {
		Icon,
		ArrowLeft,
		DotsHorizontal,
		Share,
		Star,
		ChatAlt,
		Bookmark
	} from 'svelte-hero-icons';
	import { fly, fade } from 'svelte/transition';
	export let showLeftIcon: boolean,
		heading: string,
		showRightIcon: boolean,
		handleOpenRecipeShareDialog: () => void;
	let openDialog: boolean = false;

	// onMount(() => {
	// 	console.log(dialogRef);
	// 	function handleClickOutside(e: any) {
	// 		if (dialogRef?.current && !dialogRef?.current?.contains(e.target)) {
	// 			console.log('clicked outside');
	// 		}
	// 	}
	// 	document.addEventListener('mousedown', handleClickOutside);
	// });
</script>

<div class="container">
	{#if showLeftIcon}
		<span on:click={() => history.back()} on:keydown><Icon src={ArrowLeft} size="23px" /></span>
	{:else}
		<div />
	{/if}
	{#if heading}
		<h1>{heading}</h1>
	{:else}
		<div />
	{/if}
	{#if showRightIcon}
		<span on:click={() => (openDialog = !openDialog)} on:keydown
			><Icon src={DotsHorizontal} size="35px" /></span
		>
	{:else}
		<div />
	{/if}
</div>
<dialog open={openDialog} on:close={() => (openDialog = false)} class="option__modal">
	<div transition:fly|global={{ y: 200, duration: 2000, delay: 300 }} class="options">
		<ul>
			<li
				on:click={() => {
					handleOpenRecipeShareDialog();
					openDialog = false;
				}}
				on:keydown
			>
				<span><Icon src={Share} size="20px" /></span>Share
			</li>
			<li><span><Icon src={Star} solid size="20px" /></span>Rate Recipe</li>
			<li><span><Icon src={ChatAlt} size="20px" /></span>Review</li>
			<li><span><Icon src={Bookmark} solid size="20px" /></span>Unsave</li>
		</ul>
	</div>
</dialog>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.container > h1 {
		font-size: 18px;
		font-weight: 600;
	}

	.option__modal {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
	}

	.options {
		z-index: 9999 !important;
		position: absolute;
		top: 0%;
		right: 8%;
		padding: 10px;
		border-radius: 8px;
		background: var(--color-white);
		box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1);
	}

	.options {
		width: 190px;
	}

	.options li {
		padding: 10px 20px 10px 10px;
		display: flex;
		align-items: center;
		gap: 20px;
	}
</style>
