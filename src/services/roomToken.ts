export async function getToken(name: string, room: string) {
	try {
		const response = await fetch('/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, room })
		});
		return await response.json();
	} catch (ex) {
		console.log('error', ex);
	}
}
