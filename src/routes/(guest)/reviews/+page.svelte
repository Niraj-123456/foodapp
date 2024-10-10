<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import TopNavigation from '$lib/TopNavigation.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { Badge } from '$lib/components/ui/badge/index';
	import { SendHorizonal, ThumbsUp, ThumbsDown } from 'lucide-svelte';
	import ReviewerOne from '../../../assets/images/reviewer_1.png';
</script>

<div>
	<TopNavigation heading="Reviews" showLeftIcon={true} showRightIcon={false} />

	<div>
		<div class="text-gray-400 text-xs mt-5">255 comments</div>

		<div class="mt-3 flex flex-col gap-2">
			<label for="review" class="text-md">Leave a comment</label>
			<div class="relative">
				<Textarea id="review" placeholder="write a review..." class="placeholder:text-gray-400" />
				<Button size="sm" class="absolute right-1 bottom-1"
					>Post <SendHorizonal class="w-5 h-5 ml-2" /></Button
				>
			</div>
		</div>

		<div class="mt-6">
			<h4 class="text-sm text-gray-600">Comments (3)</h4>
			<div class="mt-3 flex flex-col gap-4 divide-y-2">
				<div class="flex flex-col gap-3">
					<div class="flex gap-2 items-center">
						<Avatar.Root>
							<Avatar.Image src={ReviewerOne} alt="" />
							<Avatar.Fallback>N</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p class="text-sm font-semibold">Bella Throne</p>
							<p class="text-xs text-gray-400">June 12, 2020 - 19:35</p>
						</div>
					</div>
					<p class="text-sm">
						Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillum
					</p>

					<div class="flex gap-[5px] items-center">
						<Badge class="bg-primary/60">9 <ThumbsUp class="w-3 h-3 ml-1" /></Badge>
						<Badge class="bg-gray-400">6 <ThumbsDown class="w-3 h-3 ml-1" /></Badge>
					</div>
				</div>
				<div class="flex flex-col gap-3 pt-3">
					<div class="flex gap-2 items-center">
						<Avatar.Root>
							<Avatar.Image src={ReviewerOne} alt="" />
							<Avatar.Fallback>N</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p class="text-sm font-semibold">Bella Throne</p>
							<p class="text-xs text-gray-400">June 12, 2020 - 19:35</p>
						</div>
					</div>
					<p class="text-sm">
						Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillum
					</p>

					<div class="flex gap-[5px] items-center">
						<Badge class="bg-primary/60">9 <ThumbsUp class="w-3 h-3 ml-1" /></Badge>
						<Badge class="bg-gray-400">6 <ThumbsDown class="w-3 h-3 ml-1" /></Badge>
					</div>
				</div>
				<div class="flex flex-col gap-3 pt-3">
					<div class="flex gap-2 items-center">
						<Avatar.Root>
							<Avatar.Image src={ReviewerOne} alt="" />
							<Avatar.Fallback>N</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p class="text-sm font-semibold">Bella Throne</p>
							<p class="text-xs text-gray-400">June 12, 2020 - 19:35</p>
						</div>
					</div>
					<p class="text-sm">
						Lorem Ipsum tempor incididunt ut labore et dolore, inise voluptate velit esse cillum
					</p>

					<div class="flex gap-[5px] items-center">
						<Badge class="bg-primary/60">9 <ThumbsUp class="w-3 h-3 ml-1" /></Badge>
						<Badge class="bg-gray-400">6 <ThumbsDown class="w-3 h-3 ml-1" /></Badge>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
