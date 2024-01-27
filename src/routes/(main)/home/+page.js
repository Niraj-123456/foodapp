/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	try {
		const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
		const result = await res.json();

		return { areas: result?.meals };
	} catch (ex) {
		console.log(ex);
	}
}
