/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	try {
		const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
		const result = await res.json();
		return { recipe: result.meals[0] };
	} catch (ex) {
		console.log(ex);
	}
}
