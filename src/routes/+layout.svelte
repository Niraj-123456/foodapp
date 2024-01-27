<script>
	import '../app.css';
	import Transition from '../lib/Transition.svelte';
</script>

<Transition refresh={''}>
	<div class="w-full h-[100%] relative">
		<slot />
	</div>
</Transition>
