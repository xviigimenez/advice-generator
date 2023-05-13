export async function getAdvice() {
	const advice = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-cache",
	});

	return advice.json();
}
