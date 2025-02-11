<script>
	import { onMount } from 'svelte';
	import { HpLiveKitRoom } from 'hp-livekit-sdk';
	import { getToken } from '../../services/roomToken';
	import { page } from '$app/stores';
	import { config } from '../../utils/config';

	let url = config.LIVEKIT_SERVER_URL;
	let token = '';
	let loading = true;

	const participantName = $page.url.searchParams.get('name') ?? '';
	const room = $page.url.searchParams.get('room') ?? '';

	onMount(() => {
		generateRoomToken();
	});

	const generateRoomToken = () => {
		getToken(participantName, room)
			.then((res) => {
				console.log('res', res);
				token = res?.payload?.token;
			})
			.catch((err) => console.log('error 22', err))
			.finally(() => (loading = false));
	};
</script>

<div class="w-full grid place-items-center -p-6 bg-gray-600">
	{#if loading}
		<div class="text-white">Loading...</div>
	{:else if !url || !token}
		<div>Room Url and token required to enter the room!!!</div>
	{:else}
		<HpLiveKitRoom {url} {token} enableVideo={true} enableAudio={true} />
	{/if}
</div>
