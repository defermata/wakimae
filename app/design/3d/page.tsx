import type { Metadata, Route } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "3D STL",
};

const projects = [
	{
		href: "/design/3d/flip4",
		label: "/flip4",
		date: "25 November 2026",
		description:
			"Printable 3D model mounting for compact headless Samsung Galaxy Z Flip4.",
	},
] as const;

export default function ThreeD() {
	return (
		<div className="flex flex-col gap-8 py-12">
			<div>
				<h1 className="text-2xl font-semibold">3D STL</h1>
				<p className="mt-2">
					Printable 3D models for functional parts.
				</p>
			</div>

			<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
				<div className="col-span-2 grid grid-cols-subgrid border-2 border-foreground bg-canvas px-3 py-2 font-semibold">
					<div>Project</div>
					<div>Description</div>
				</div>

				{projects.map((project) => (
					<div
						key={project.href}
						className="col-span-2 grid grid-cols-subgrid items-center border-2 border-foreground bg-canvas px-3 py-2"
					>
						<div className="flex flex-col gap-1">
							<Link
								href={project.href as Route}
								className="font-semibold text-accent hover:underline"
							>
								{project.label}
							</Link>
							<p className="text-xs text-foreground">
								{project.date}
							</p>
						</div>
						<div>{project.description}</div>
					</div>
				))}
			</div>
		</div>
	);
}
