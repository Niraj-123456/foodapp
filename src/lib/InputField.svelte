<script lang="ts">
	export let label: string;
	export let type: string = 'text';
	export let id: string;
	export let name: string;
	export let placeholder: string;
	export let value: any;

	function typeAction(node: any) {
		node.type = type;
	}
</script>

<div class="input__group">
	{#if label} <label for={id}>{label}</label> {/if}
	<input use:typeAction {name} {id} {placeholder} bind:value />
</div>

<style>
	.input__group {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-top: 30px;
	}

	.input__group > label {
		font-size: 14px;
		line-height: 21px;
		color: #121212;
	}

	.input__group > input {
		height: 55px;
		padding-inline: 20px 50px;
		border: 1.5px solid #d9d9d9;
		border-radius: 10px;
		font-size: 12px;
		line-height: 16px;
	}

	.input__group > input::placeholder {
		color: #d9d9d9;
	}
</style>
