import type { Metadata, Route } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Samsung Galaxy Z Flip4",
};

export default function Flip4Page() {
	return (
		<article className="flex flex-col gap-8 py-12">
			<header className="flex flex-col gap-3 border-b-2 border-foreground pb-4">
				<div className="flex items-baseline justify-between gap-4">
					<Link
						href={"/design/3d-stl" as Route}
						className="text-sm font-semibold text-accent hover:underline"
					>
						&larr; /3d-stl
					</Link>
					<time className="text-xs text-foreground">
						25 November 2026
					</time>
				</div>
				<h1 className="text-2xl font-semibold">
					Galaxy Z Flip4 Mounting Bracket
				</h1>
			</header>

			<section className="flex flex-col gap-3">
				<h2 className="border-b-2 border-foreground pb-1 text-lg font-semibold">
					Overview
				</h2>
				<p>
					lorem ipsum dolor sit amet consectetur adipiscing elit
					tempore placeat dolore libero dolore praesentium officia aut
					qui incididunt animi soluta similique est fuga et
					praesentium animi vel officia in elit eligendi laborum
					nostrud consequatur vel nulla id dolor quibusdam quo
					occaecat ea eiusmod adipiscing iusto et sunt elit odio
					tempore
				</p>
				<p>
					lorem ipsum dolor sit amet consectetur adipiscing elit
					tempore placeat dolore libero dolore praesentium officia aut
					qui incididunt animi soluta similique est fuga et
					praesentium animi vel officia in elit eligendi laborum
					nostrud consequatur vel nulla id dolor quibusdam quo
					occaecat ea eiusmod adipiscing iusto et sunt elit odio
					tempore
				</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="border-b-2 border-foreground pb-1 text-lg font-semibold">
					Resources
				</h2>
				<ul className="list-inside list-disc space-y-1">
					<li>
						<a
							href="/stl/flip4-bracket.stl"
							download
							className="font-semibold text-accent hover:underline"
						>
							flip4-bracket.stl
						</a>{" "}
						— lorem ipsum dolor sit amet consectetur adipiscing elit
						duis eu
					</li>
				</ul>
			</section>
		</article>
	);
}
