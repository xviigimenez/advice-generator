"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import AdviceBox from "./AdviceBox";

export default function Home() {
	const queryClient = new QueryClient();
	return (
		<article className="bg-blue-dark_gray flex flex-col items-center rounded-xl gap-6 p-4 xl:min-w-max">
			<QueryClientProvider client={queryClient}>
				<AdviceBox />
			</QueryClientProvider>
		</article>
	);
}
