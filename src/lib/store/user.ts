import type { User } from '$lib/types/user';
import { writable, type Writable } from 'svelte/store';

export let user: Writable<User | null> = writable(
	typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('foodapp_user') || '{}') : null
);
