<script lang="ts">
	import { Input } from 'flowbite-svelte';
	import { Search } from 'lucide-svelte';
	export let debounce: (e: any) => void = () => {};
	export let onFocus: () => Promise<void> | void = () => {};
</script>

<div class="relative w-full">
	<Input
		type="search"
		placeholder="Search Recipe"
		on:input={debounce}
		on:focus={onFocus}
		class="w-full border-[1.3px] border-[#D9D9D9] rounded-[10px] pl-[38px] pr-2 h-[40px] placeholder:text-[#D9D9D9] text-[13px] hover:border-[#129575] focus:outline-none"
	/>
	<Search class="text-[#D9D9D9] absolute top-[50%] translate-x-[50%] translate-y-[-50%] w-5 h-5" />
</div>
