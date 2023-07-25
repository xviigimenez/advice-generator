"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
	title: "Advice Generator | Frontend Mentor",
};
const queryClient = new QueryClient();
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${manrope.className} bg-blue-dark w-screen h-screen flex items-center justify-center`}
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	);
}
