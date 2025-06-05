<script lang="ts">
	export let size: string = '3',
		color: string = '#000';
</script>

<div class="loading__wrapper">
	<svg class="animate-spin p-[1px]" width={`${size}rem`} viewBox="0 0 50 50" stroke={color}>
		<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
	</svg>
</div>

<style>
	.loading__wrapper {
		width: 100%;
		height: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 50px;
	}

	.path {
		stroke: var(--color-green);
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
</style>
