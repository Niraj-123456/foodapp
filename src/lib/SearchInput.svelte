<script lang="ts">
	import { Icon, Search, Adjustments } from 'svelte-hero-icons';
	export let debounce: (e: any) => void;
	export let onFocus: () => void;
</script>

<div class="flex justify-between mt-[20px]">
	<div class="relative w-[260px]">
		<input
			type="text"
			placeholder="Search Recipe"
			on:input={debounce}
			on:focus={onFocus}
			class="w-full border-[1.3px] border-[#D9D9D9] rounded-[10px] pl-[38px] pr-[50px] h-[40px] placeholder:text-[#D9D9D9] text-[12px] hover:border-[#129575] focus:outline-none"
		/>
		<Icon
			src={Search}
			size="20px"
			class="text-[#D9D9D9] absolute top-[50%] translate-x-[50%] translate-y-[-50%]"
		/>
	</div>

	<button
		class="w-[40px] h-[40px] bg-[#129575] border-none rounded-[10px] text-[#fff] rotate-90 flex items-center justify-center"
		><Icon src={Adjustments} size="23px" /></button
	>
</div>
