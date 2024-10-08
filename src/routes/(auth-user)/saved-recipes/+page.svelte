<script lang="ts">
	import TopNavigation from '$lib/TopNavigation.svelte';
	import RecipieCardWide from '$lib/RecipieCardWide.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';

	let openRecipeShareDialog: boolean = false;
</script>

<div class="main">
	<TopNavigation
		showLeftIcon={true}
		heading="Saved Recipes"
		showRightIcon={false}
		bind:open={openRecipeShareDialog}
	/>
	<div class="saved-recipe-wrapper">
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
		<RecipieCardWide />
	</div>
</div>

<style>
	.main {
		width: 100%;
	}

	.saved-recipe-wrapper {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
