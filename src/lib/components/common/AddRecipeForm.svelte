<script lang="ts">
	import { Label } from '$lib/components/ui/label/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<div
	class="flex flex-col gap-4 h-full [&>div:not(:last-child)]:flex [&>div:not(:last-child)]:flex-col [&>div:not(:last-child)]:gap-2"
>
	<div>
		<Label for="title" class="text-sm">Name</Label>
		<Input name="title" class="border border-gray-200" />
	</div>
	<div>
		<Label for="description">Description</Label>
		<Input name="description" class="border border-gray-200" />
	</div>
	<div>
		<Label for="category">Category</Label>
		<Input name="category" class="border border-gray-200" />
	</div>
	<div>
		<Label for="origin">Origin</Label>
		<Input name="origin" class="border border-gray-200" />
	</div>
	<div>
		<Label for="ingredients">Ingredients</Label>
		<Input name="ingredients" class="border border-gray-200" />
	</div>
	<div>
		<Label for="procedures">Procedures</Label>
		<Input name="procedures" class="border border-gray-200" />
	</div>
</div>
