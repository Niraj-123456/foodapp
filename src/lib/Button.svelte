<script lang="ts">
	import { Icon } from 'lucide-svelte';
	export let label: string;
	export let icon: any;
	export let type: 'button' | 'submit' | 'reset' | null | undefined;
	export let onClick: () => void;
</script>

<button {type} on:click={onClick} class="btn">{label} <Icon src={icon} solid size="20px" /></button>

<style>
	.btn {
		border: none;
		background: #129575;
		color: #fff;
		font-size: 16px;
		padding: 15px 50px;
		border-radius: 10px;
		width: 100%;
		font-weight: 600;
		display: flex;
		justify-content: center;
		gap: 10px;
	}
</style>
