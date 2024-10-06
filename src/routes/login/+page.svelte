<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import InputField from '$lib/InputField.svelte';
	import OtherSignInOption from '$lib/OtherSignInOption.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import { emailRegex } from '../../utils/helperString';

	let email: string = '';
	let password: string = '';
	let errors = new Map();

	const handleValidateLoginForm = () => {
		if (!email) {
			errors.set('email', 'Email is required');
		} else if (!email?.match(emailRegex)) {
			errors.set('email', 'Email must be valid');
		} else {
			errors.delete('email');
		}

		if (!password) {
			errors.set('password', 'Password is required');
		} else if (password?.length < 6) {
			errors.set('password', 'Password must be greater than or equal to 6 characters.');
		} else {
			errors.delete('password');
		}

		return errors.size === 0;
	};

	const handleSubmit = () => {
		if (!handleValidateLoginForm()) return;

		console.log('email', email);
		console.log('password', password);
	};
</script>

<div class="main">
	<h1 class="text-4xl font-semibold">Login</h1>

	<form class="form" on:submit|preventDefault={handleSubmit}>
		<InputField
			label="Email"
			type="email"
			name="email"
			id="email"
			placeholder="Enter Email"
			bind:value={email}
			hasError={errors.has('email')}
			errorMsg={errors.get('email')}
		/>

		<InputField
			label="Password"
			type="password"
			name="password"
			id="password"
			placeholder="Enter password"
			bind:value={password}
			hasError={errors.has('password')}
			errorMsg={errors.get('password')}
		/>

		<div class="forgot__pwdlink"><a href={'#'}>Forgot Password?</a></div>
		<div class="btn__group">
			<Button type="submit" class="w-full h-12 text-base font-bold"
				>{'Login'} <ArrowRight class="ml-2" /></Button
			>
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

	.form {
		margin-top: 5px;
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
