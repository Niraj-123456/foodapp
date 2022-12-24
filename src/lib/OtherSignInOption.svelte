<script>
	import FacebookIcon from '../assets/images/facebook_icon.png';
	import GoogleIcon from '../assets/images/google_icon.png';
</script>

<div class="signin__options">
	<span>Or Sign in With</span>
	<div class="options">
		<img src={FacebookIcon} alt="facebook" on:click={() => console.log('facebook')} on:keydown />
		<img src={GoogleIcon} alt="google" on:click={() => console.log('google')} on:keydown />
	</div>
</div>

<style>
	.signin__options {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}

	.signin__options > span {
		font-size: 12px;
		color: #d9d9d9;
		line-height: 16px;
		position: relative;
	}

	.signin__options > span::after,
	.signin__options > span::before {
		content: '';
		position: absolute;
		top: 50%;
		width: 50px;
		height: 1px;
		background: #d9d9d9;
	}

	.signin__options > span::before {
		left: -60px;
	}

	.signin__options > span::after {
		right: -60px;
	}

	.options {
		display: flex;
		gap: 25px;
		margin-top: 20px;
	}

	.options img {
		background: #ffffff;
		box-shadow: 0px 0px 5px 3px rgba(105, 105, 105, 0.1);
		border-radius: 10px;
		padding: 10px;
		object-fit: contain;
	}
</style>
