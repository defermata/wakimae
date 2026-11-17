import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
	title: "wakimae",
	description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="min-h-full flex flex-col">
				<Nav />
				<main className="mx-auto w-full flex-1 px-4 md:w-3/4">
					{children}
				</main>
			</body>
		</html>
	);
}
