import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Design",
};

export default function Design() {
	return (
		<div className="py-12">
			<h1 className="text-2xl font-semibold">Design</h1>
			<p className="mt-2">
				No 3D models are listed here yet. For requests, contact details
				are on{" "}
				<Link href="/profile" className="text-accent hover:underline">
					/profile
				</Link>
				{"."}
			</p>
		</div>
	);
}
