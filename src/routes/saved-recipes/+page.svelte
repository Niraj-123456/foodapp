<script>
	import TopNavigation from '$lib/TopNavigation.svelte';
	import RecipieCardWide from '$lib/RecipieCardWide.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';
</script>

<div class="container">
	<TopNavigation showLeftIcon={true} heading="Saved Recipes" showRightIcon={false} />
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
	<StickyFooter />
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 130px;
	}

	.saved-recipe-wrapper {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
