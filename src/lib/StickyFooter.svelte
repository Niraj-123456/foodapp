<script>
	import { Icon, Home, Bookmark, Bell, User, Plus } from 'svelte-hero-icons';
</script>

<div class="container">
	<ul class="footer__navs">
		<li class="active">
			<Icon src={Home} size="30px" class="text-[#129575]" />
		</li>
		<li><Icon src={Bookmark} size="30px" class="text-[#d9d9d9]" /></li>
		<li class="add">
			<Icon
				src={Plus}
				size="28px"
				solid
				class="bg-[#129575] text-white w-[48px] h-[48px] p-2 rounded-full"
			/>
		</li>
		<li><Icon src={Bell} size="30px" class="text-[#d9d9d9]" /></li>
		<li><Icon src={User} size="30px" class="text-[#d9d9d9]" /></li>
	</ul>
</div>

<style>
	.container {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30px 50px;
		margin-top: 20px;
		background: var(--color-white);
		box-shadow: 0px 0px 8px rgba(108, 108, 108, 0.08);
		mask-composite: subtract;
	}

	.footer__navs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer__navs li.active {
		color: var(--color-green);
	}

	.add {
		margin-top: -100px;
		/* position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%); */
		box-shadow: -0px 5px 8px 2px rgba(108, 108, 108, 0.08);
		border: solid 5px #ffffff;
		border-radius: 50%;
	}
</style>
