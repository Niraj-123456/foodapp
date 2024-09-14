import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
	const result = await res.json();
	return { areas: result?.meals };
};
