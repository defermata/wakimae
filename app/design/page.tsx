import type { Metadata, Route } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Design",
};

const categories = [
	{
		href: "/3d-stl",
		label: "/3d-stl",
		description: "Printable 3D models for functional parts.",
	},
	{
		href: "/software-concept",
		label: "/software-concept",
		description: "Ideas and prototypes for software I want to build.",
	},
] as const;

export default function Design() {
	return (
		<div className="flex flex-col gap-8 py-12">
			<div>
				<h1 className="text-2xl font-semibold">Design</h1>
				<p className="mt-2">
					This page lists things I made. I call all of them{" "}
					<span className="text-accent">design</span>, even the ones
					that aren&apos;t strictly design work. For requests, contact
					details are on{" "}
					<Link
						href="/profile"
						className="text-accent hover:underline"
					>
						/profile
					</Link>
					.
				</p>
			</div>

			<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
				<div className="col-span-2 grid grid-cols-subgrid border-2 border-foreground bg-canvas px-3 py-2 font-semibold">
					<div>Category</div>
					<div>Description</div>
				</div>

				{categories.map((cat) => (
					<div
						key={cat.href}
						className="col-span-2 grid grid-cols-subgrid border-2 border-foreground bg-canvas px-3 py-2"
					>
						<Link
							href={cat.href as Route}
							className="font-semibold text-accent hover:underline"
						>
							{cat.label}
						</Link>
						<div>{cat.description}</div>
					</div>
				))}
			</div>
		</div>
	);
}
