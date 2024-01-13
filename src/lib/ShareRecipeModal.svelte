<script lang="ts">
	import { Icon, X } from 'svelte-hero-icons';
	export let openRecipeShareDialog: boolean, handleCloseRecipeShareDialog: () => void;
</script>

<dialog
	open={openRecipeShareDialog}
	on:close={() => handleCloseRecipeShareDialog()}
	class="recipe__share__dialog"
>
	<div
		class={!openRecipeShareDialog
			? `recipe__share__dialog__content`
			: `recipe__share__dialog__content visible`}
	>
		<div class="recipe__share__dialog__header">
			<h1>Recipe Link</h1>
			<span on:click={() => handleCloseRecipeShareDialog()} on:keydown
				><Icon src={X} size="20px" /></span
			>
		</div>
		<p>Copy recipe link and share your recipe link with friends and family.</p>
		<div class="recipe__share__link">
			<input type="text" />
			<button>Copy Link</button>
		</div>
	</div>
</dialog>

<style>
	.recipe__share__dialog {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	.recipe__share__dialog__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
		background-color: #fefefe;
		margin: auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
		opacity: 0;
		transform-origin: center;
		transition: all 0.5s ease-in-out;
	}

	.recipe__share__dialog__content.visible {
		opacity: 1;
	}

	.recipe__share__dialog__header {
		display: flex;
		justify-content: space-between;
	}

	.recipe__share__dialog__header > h1 {
		font-size: 22px;
		font-weight: 600;
	}

	.recipe__share__dialog__content > p {
		font-size: 12px;
		color: var(--color-gray-3);
	}
</style>
