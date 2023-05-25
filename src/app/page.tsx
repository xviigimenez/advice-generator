"use client";
import { useState, useEffect } from "react";

async function getAdvice() {
	const advice = await fetch("https://api.adviceslip.com/advice", {
		cache: "no-cache",
	});
	return advice.json();
}

export default function Home() {
	const [advice, setAdvice] = useState({ slip: { id: "", advice: "" } });

	const fetchData = async () => {
		const newAdvice = await getAdvice();
		setAdvice(newAdvice);
	};

	useEffect(() => {
		fetchData();
	}, []); // Fetch data on component mount

	const handleButtonClick = async () => {
		await fetchData();
	};
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
				<button
					className="p-4 bg-neon_green rounded-full translate-y-[85%] hover:shadow-[0_0_25px_0] hover:shadow-neon_green transition-all"
					onClick={handleButtonClick}
				>
					<img src="/icon-dice.svg" />
				</button>
			</div>
		</article>
	);
}
