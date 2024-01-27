<script lang="ts">
	import InputField from '$lib/InputField.svelte';
	import Button from '$lib/Button.svelte';
	import OtherSignInOption from '$lib/OtherSignInOption.svelte';

	import { ArrowRight } from 'svelte-hero-icons';

	let email: string;
	let password: string;

	const handleSubmit = () => {
		console.log('email', email);
		console.log('password', password);
	};
</script>

<div class="main">
	<div class="greet">
		<h1>Hello,</h1>
		<p>Welcome Back!</p>
	</div>

	<form class="form" on:submit|preventDefault={handleSubmit}>
		<InputField
			label="Email"
			type="email"
			name="email"
			id="email"
			placeholder="Enter Email"
			bind:value={email}
		/>
		<InputField
			label="Password"
			type="password"
			name="password"
			id="password"
			placeholder="Enter password"
			bind:value={password}
		/>
		<div class="forgot__pwdlink"><a href={'#'}>Forgot Password?</a></div>
		<div class="btn__group">
			<Button type="submit" label={'Login'} icon={ArrowRight} onClick={() => {}} />
		</div>

		<OtherSignInOption />

		<div class="dont__have__account">
			<span>Don't have an account? <a href={'/signup'}>Sign Up</a></span>
		</div>
	</form>
</div>

<style>
	.main {
		width: 100%;
		min-height: 100vh;
		padding-inline: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.greet > h1 {
		font-size: 30px;
		line-height: 45px;
	}

	.greet > p {
		font-size: 20px;
		line-height: 30px;
		color: #121212;
	}

	.form {
		margin-top: 27px;
	}

	.forgot__pwdlink {
		margin-top: 20px;
	}

	.forgot__pwdlink > a {
		color: #ff9c00;
		font-size: 12px;
		line-height: 16px;
	}

	.btn__group {
		margin-top: 25px;
	}

	.dont__have__account {
		text-align: center;
		margin-top: 55px;
	}

	.dont__have__account > span {
		font-size: 12px;
		line-height: 16px;
	}

	.dont__have__account > span > a {
		color: #ff9c00;
	}
</style>
