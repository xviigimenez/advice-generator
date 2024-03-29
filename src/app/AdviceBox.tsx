"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useQuery } from "react-query";

interface AdviceData {
	slip: { id: number; advice: string };
}

export default function AdviceBox() {
	const { data, isLoading, isSuccess, refetch } = useQuery({
		queryFn: async () => {
			const { data } = await axios.get(
				"https://api.adviceslip.com/advice"
			);
			return data as AdviceData;
		},
		refetchOnWindowFocus: false,
	});
	return (
		<>
			<div className="mt-6">
				<h1 className="text-neon_green uppercase text-sm tracking-[.2em] font-bold">
					{isLoading ? (
						<Loader2 className="h-10 w-10 animate-spin" />
					) : isSuccess ? (
						<span>advice# {data.slip.id}</span>
					) : (
						"Error!"
					)}
				</h1>
			</div>
			<div>
				<h2 className="text-light_cyan text-xl font-bold">
					{isLoading ? (
						<Loader2 className="h-10 w-10 animate-spin" />
					) : isSuccess ? (
						<span>{data.slip.advice}</span>
					) : (
						"Error!"
					)}
				</h2>
			</div>
			<div className="flex flex-col items-center">
				<Image
					src="/pattern-divider-mobile.svg"
					alt={"Pattern divider"}
					className="xl:hidden"
					width={295}
					height={16}
				/>
				<Image
					src="/pattern-divider-desktop.svg"
					alt={"Pattern divider"}
					className="hidden xl:block"
					width={295}
					height={16}
				/>
				<button
					className="p-4 bg-neon_green rounded-full translate-y-[85%] hover:shadow-[0_0_25px_0] hover:shadow-neon_green transition-all"
					onClick={() => refetch()}
				>
					<Image
						src="/icon-dice.svg"
						alt={"Dice icon"}
						width={24}
						height={24}
					/>
				</button>
			</div>
		</>
	);
}
