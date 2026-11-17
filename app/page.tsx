import Image from "next/image";
import Link from "next/link";

const services = [
	{ slug: "3d-design", label: "3D Design", color: "#e8d9c0" },
	{ slug: "electronic-repair", label: "Electronic Repair", color: "#d9e2c8" },
	{ slug: "programming", label: "Programming", color: "#d6dbe8" },
];

export default function Home() {
	return (
		<div className="flex flex-col gap-8 py-12">
			<div className="flex justify-center">
				<Image
					src="/kanae.webp"
					alt="Kanae"
					width={1440}
					height={1011}
					loading="eager"
					style={{ width: "95%", height: "auto" }}
					className="border-2 border-foreground"
				/>
			</div>

			<div className="text-center">
				<h1 className="text-2xl font-semibold">
					Need Something From{" "}
					<span className="text-accent">Wakimae</span> ?
				</h1>
			</div>

			<div className="flex flex-wrap items-center justify-center gap-4">
				{services.map((service) => (
					<div
						key={service.slug}
						style={{ backgroundColor: service.color }}
						className="rounded-lg px-6 py-4 text-center transition hover:brightness-90"
					>
						{service.label}
					</div>
				))}
			</div>

			<div className="text-center text-sm">
				<span className="text-warning">*</span>for contact details, read{" "}
				<Link href="/profile" className="text-accent hover:underline">
					/profile
				</Link>
			</div>
		</div>
	);
}
