const CLIENT_ID = 'test-ma-2';

export function miniAppInitializer() {
	const hamromini_sdkjs = window?.hamromini_sdkjs;
	if (hamromini_sdkjs) {
		window.miniapp = new hamromini_sdkjs.MiniApp();
	}
	return new Promise(async (resolutionFunc, rejectionFunc) => {
		try {
			const userDetails = await hamromini_sdkjs?.initialize(CLIENT_ID, window?.miniapp);
			resolutionFunc(userDetails);
		} catch (e) {
			rejectionFunc(e);
			return null;
		}
	});
}
