<div class="loading__wrapper">
	<svg class="animate-spin w-[35px] h-[35px]" viewBox="0 0 50 50">
		<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="7" />
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
		stroke: var(--color-black-2);
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
