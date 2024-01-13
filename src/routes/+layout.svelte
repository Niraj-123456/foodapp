<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Transition from '../lib/Transition.svelte';
</script>

<Transition refresh={''}>
	<div class="w-full h-[100%] flex justify-center items-center">
		<slot />
	</div>
</Transition>
