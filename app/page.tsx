import Image from "next/image";
import Link from "next/link";

type Service = {
	label: string;
	color: string;
};

const services: Service[] = [
	{ label: "3D Design", color: "#e8d9c0" },
	{ label: "Electrical & Electronic", color: "#d9e2c8" },
	{ label: "Programming", color: "#d6dbe8" },
];

const serviceBox = "block border-2 border-foreground px-6 py-4 text-center";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 py-12">
			<div className="flex justify-center">
				<Image
					src="/kanae.webp"
					alt="Illustration of Kanae"
					width={1440}
					height={669}
					preload
					sizes="(min-width: 768px) 71vw, 95vw"
					style={{ width: "95%", height: "auto" }}
					className="border-2 border-foreground"
				/>
			</div>

			<div className="text-center">
				<h1 className="text-2xl font-semibold">
					Need Something From{" "}
					<span className="text-accent">Wakimae</span>
					{"?"}
				</h1>
			</div>

			<ul className="flex flex-wrap items-center justify-center gap-4">
				{services.map(({ label, color }) => (
					<li key={label}>
						<div
							style={{ backgroundColor: color }}
							className={`${serviceBox} transition hover:brightness-90`}
						>
							{label}
						</div>
					</li>
				))}
			</ul>

			<div className="text-center text-sm">
				<span className="text-warning">*</span>for contact details, see{" "}
				<Link href="/profile" className="text-accent hover:underline">
					/profile
				</Link>
			</div>

			<div>
				<h2 className="text-xl font-semibold">
					What does <span className="text-accent">Wakimae</span> do?
				</h2>
				<p className="mt-2">
					I openly accept custom requests. For day-to-day work, I
					handle low-voltage electrical and electronic devices,
					ranging from phones and computers all the way to working on
					microcontrollers like Arduino, ESP32, and the Raspberry Pi
					Pico series.
				</p>
				<p className="mt-4">
					In my spare time, I do a bit of coding, mainly in Rust and
					C. But don&apos;t worry, if you need me to build you a
					website, or just want to consult on a technical problem
					you&apos;re dealing with in a different programming
					language, just hit me up.
				</p>
				<p className="mt-4">
					Recently I&apos;ve taken an interest in CAD, so I do have
					some 3D models, mostly functional parts. Feel free to visit{" "}
					<Link
						href="/design"
						className="text-accent hover:underline"
					>
						/design
					</Link>
					{"."}
				</p>
			</div>

			<div>
				<h2 className="text-xl font-semibold">
					So what&apos;s the limitation?
				</h2>
				<p className="mt-2">
					There are no limitations on requests. Just tell me your
					problem and I will adjust based on scale and budget. The
					rule is simple: if the end product will be used to{" "}
					<span className="text-warning">HURT OTHERS</span>, even the
					slightest, you can throw that idea into the bin.
				</p>
			</div>
		</div>
	);
}
