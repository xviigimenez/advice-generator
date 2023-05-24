"use client";

interface ButtonProps {
	getAdvice: () => void;
}

export default function Button({ getAdvice }: ButtonProps) {
	return (
		<button
			className="p-4 bg-neon_green rounded-full translate-y-[85%] hover:shadow-[0_0_25px_0] hover:shadow-neon_green transition-all"
			onClick={() => console.log("a")}
		>
			<img src="/icon-dice.svg" />
		</button>
	);
}
