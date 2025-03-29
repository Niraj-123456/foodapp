export interface User {
	user_profile: Profile;
	access_token: string;
	isLoggedIn: boolean;
}

export interface Profile {
	id: string;
	display_name: string | null;
	photo_url: string | null;
	email: string | null;
}

export interface InternalProfile {
	admin: boolean;
	businesses: string[];
}
