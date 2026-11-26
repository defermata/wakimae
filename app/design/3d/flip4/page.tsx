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
						href={"/design/3d" as Route}
						className="text-sm font-semibold text-accent hover:underline"
					>
						&larr; /3d
					</Link>
					<time className="text-xs text-foreground">
						25 November 2026
					</time>
				</div>
				<h1 className="text-2xl font-semibold">
					Galaxy Z Flip4 Headless Mod
				</h1>
			</header>

			<section className="flex flex-col gap-3">
				<h2 className="border-b-2 border-foreground pb-1 text-lg font-semibold">
					Overview
				</h2>
				<p>
					I have a weird interest in foldable phones, like the Samsung
					Z Flip lineup. I’ve realized that most of the cost that
					determines their worth on the second-hand market comes
					solely from the main screen (which is also the part that
					breaks most often). They also have a smaller secondary
					screen, but it is not as useful as the main screen, since
					some activities actually require you to use the main screen
					instead. That’s why it’s not uncommon to see someone listing
					one with a broken screen for cheap.
				</p>
				<p>
					I owned a Samsung Galaxy Z Flip4 that I bought second-hand
					back in 2025. I kept it unfolded and had a special case just
					for storing it. It originally had one green line, and the
					screen crease wasn’t too bad. I rarely turned this phone on;
					I even kept it powered off for almost two years. And I kid
					you not, later when I turned it back on, a new pink line had
					appeared to the right of the green line. I know Samsung is
					famous for its “lightsaber,” but I don’t even use the device
					at all, and the lines keep increasing. (update now it had 2
					pink lines)
				</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="border-b-2 border-foreground pb-1 text-lg font-semibold">
					Hardware
				</h2>

				<p>
					For as low as 40 USD (in my area with a broken screen) I got
					this kinda spec, which is wild.
				</p>

				<ul className="list-inside list-disc space-y-1">
					<li>
						<span className="font-semibold">CPU :</span> Qualcomm
						Snapdragon 8+ Gen 1 (4 nm)
					</li>
					<li>
						<span className="font-semibold">RAM :</span> 8 GB
					</li>
					<li>
						<span className="font-semibold">ROM :</span> 256 GB (no
						microSD)
					</li>
					<li>
						<span className="font-semibold">OS :</span> OneUI 7,
						Android 15
					</li>
				</ul>
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
							flip4.stl
						</a>
					</li>
				</ul>
			</section>
		</article>
	);
}
