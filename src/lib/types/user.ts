export interface User {
	user_profile: Profile;
	access_token: string;
	expires_in: string;
	mini_app_id: string;
	isLoggedIn: boolean;
}

export interface Profile {
	id: string;
	display_name: string;
	photo_url: string;
	email: string;
	internal_profile: InternalProfile;
}

export interface InternalProfile {
	admin: boolean;
	businesses: string[];
}
