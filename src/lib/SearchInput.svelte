<script lang="ts">
	import { Icon, Search, Adjustments } from 'svelte-hero-icons';
	export let searchQuery: string;
	export let searchFoodByName: () => void;
</script>

<div class="flex justify-between mt-[20px]">
	<div class="relative">
		<input
			type="text"
			placeholder="Search Recipe"
			bind:value={searchQuery}
			on:keydown={searchFoodByName}
			class="w-full border-[1.3px] border-[#D9D9D9] rounded-[10px] pl-[38px] pr-[50px] h-[40px] placeholder:text-[#D9D9D9] text-[12px]"
		/>
		<Icon
			src={Search}
			size="20px"
			class="text-[#D9D9D9] absolute top-[50%] translate-x-[50%] translate-y-[-50%]"
		/>
	</div>

	<button
		class="w-[40px] h-[40px] bg-[#129575] border-none rounded-[10px] text-[#fff] rotate-90 flex items-center justify-center"
		><Icon src={Adjustments} size="20px" /></button
	>
</div>
