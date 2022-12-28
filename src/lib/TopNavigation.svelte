<script lang="ts">
	import { Icon, ArrowLeft, DotsHorizontal } from 'svelte-hero-icons';
	export let showLeftIcon: boolean, heading: string, showRightIcon: boolean;
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
		<Icon src={DotsHorizontal} size="35px" />
	{:else}
		<div />
	{/if}
</div>

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
</style>
