<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import InputField from '$lib/InputField.svelte';
	import OtherSignInOption from '$lib/OtherSignInOption.svelte';

	import { ArrowRight } from 'lucide-svelte';

	let name: string;
	let email: string;
	let password: string;
	let confirmPassword: string;
	let hasChecked: boolean = false;

	const handleSubmit = () => {
		console.log(
			'name',
			name,
			'email',
			email,
			'password',
			password,
			'confirmPassword',
			confirmPassword,
			'checked',
			hasChecked
		);
	};
</script>

<div class="signup__wrapper">
	<div class="signup__heading">
		<h1>Create an account</h1>
		<p>Let’s help you set up your account, it won’t take long.</p>
	</div>
	<div class="signup__form">
		<form on:submit|preventDefault={handleSubmit}>
			<InputField
				label="Name"
				type="text"
				id="name"
				name="name"
				placeholder="Enter Name"
				bind:value={name}
				inputClass="h-14"
			/>

			<InputField
				label="Email"
				type="email"
				id="email"
				name="email"
				placeholder="Enter Email"
				bind:value={email}
				inputClass="h-14"
			/>
			<InputField
				label="Password"
				type="password"
				id="password"
				name="password"
				placeholder="Enter Password"
				bind:value={password}
				inputClass="h-14"
			/>
			<InputField
				label="Confirm Password"
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="Retype Password"
				bind:value={confirmPassword}
				inputClass="h-14"
			/>

			<div class="terms">
				<input type="checkbox" name="terms" id="terms" bind:checked={hasChecked} />
				<label for="terms">Accept terms & Condition</label>
			</div>

			<div class="btn__group">
				<Button type="submit" class="w-full h-12 text-base font-bold"
					>Sign Up <ArrowRight class="ml-2" /></Button
				>
			</div>
		</form>

		<OtherSignInOption />

		<div class="signin__link">
			<span>Already a member? <a href={'/login'}>Sign In</a></span>
		</div>
	</div>
</div>

<style>
	.signup__wrapper {
		width: 100%;
		min-height: 100vh;
		padding-inline: 30px;
		padding-block: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.signup__heading > h1 {
		font-size: 20px;
		line-height: 30px;
		font-weight: 600;
	}

	.signup__heading > p {
		margin-top: 5px;
		max-width: 210px;
		font-size: 12px;
		color: #121212;
	}

	.terms {
		margin-top: 20px;
		color: #ff9c00;
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 12px;
		line-height: 16px;
		height: 17px;
	}

	.terms > input {
		-moz-appearance: none;
		-webkit-appearance: none;
		-o-appearance: none;
		outline: none;
		content: none;
		border: 0;
	}

	.terms > input::before {
		content: '✔';
		font-size: 14px;
		color: transparent !important;
		background: #fef2e0;
		display: block;
		width: 17px;
		height: 17px;
		border: 1px solid #ff9c00;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.terms > input:checked::before {
		color: #fff !important;
		background: #ff9c00;
	}

	.btn__group {
		margin-top: 20px;
	}

	.signin__link {
		text-align: center;
		margin-top: 20px;
		font-size: 12px;
	}

	.signin__link > span > a {
		color: #ff9c00;
	}
</style>
