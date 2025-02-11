import { json, type RequestHandler } from '@sveltejs/kit';
import { AccessToken } from 'livekit-server-sdk';
import { config } from '../../../utils/config';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, room } = await request.json();

		const identity = name.split(' ')[0] + '_' + Date.now() + '_' + room;

		const at = new AccessToken(config.LIVEKIT_API_KEY, config.LIVEKIT_SECRET, {
			identity,
			name
		});
		at.addGrant({ roomJoin: true, room, canPublish: true, canSubscribe: true });
		const token = at.toJwt();
		const response = {
			message: 'success',
			statusCode: 200,
			success: true,
			payload: { token }
		};
		return json(response, { status: 200 });
	} catch (ex) {
		console.log('error', ex);
		return json(ex, { status: 400 });
	}
};
