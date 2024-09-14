<script lang="ts">
	import { Search, SlidersHorizontal } from 'lucide-svelte';
	import { Input } from 'flowbite-svelte';
	export let debounce: (e: any) => void;
	export let onFocus: () => void;
</script>

<div class="w-full flex items-center gap-2 mt-[20px]">
	<div class="relative w-full">
		<Input
			type="text"
			placeholder="Search Recipe"
			on:input={debounce}
			on:focus={onFocus}
			class="w-full border-[1.3px] border-[#D9D9D9] rounded-[10px] pl-[38px] pr-[50px] h-[40px] placeholder:text-[#D9D9D9] text-[12px] hover:border-[#129575] focus:outline-none"
		/>
		<Search class="text-[#D9D9D9] absolute top-[50%] translate-x-[50%] translate-y-[-50%]" />
	</div>

	<div>
		<button
			class="w-[40px] h-[40px] bg-[#129575] border-none rounded-[10px] text-[#fff] flex items-center justify-center"
			><SlidersHorizontal /></button
		>
	</div>
</div>
