import Button from "./components/Button";

async function getAdvice() {
	"use server";
	const advice = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-cache",
	});

	return advice.json();
}

export default async function Home() {
	const advice = await getAdvice();

	return (
		<article className="bg-blue-dark_gray flex flex-col items-center rounded-xl gap-6 p-4">
			<div className="mt-6">
				<h1 className="text-neon_green uppercase text-sm tracking-[.2em] font-bold">
					advice # {advice.slip.id}
				</h1>
			</div>
			<div>
				<h2 className="text-light_cyan text-xl font-bold">
					{advice.slip.advice}
				</h2>
			</div>
			<div className="flex flex-col items-center">
				<img src="/pattern-divider-mobile.svg" />
				<Button getAdvice={getAdvice} />
			</div>
		</article>
	);
}
