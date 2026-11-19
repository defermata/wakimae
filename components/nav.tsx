import type { Route } from "next";
import Link from "next/link";

const links: { href: Route; label: string }[] = [
	{ href: "/", label: "/" },
	{ href: "/profile", label: "/profile" },
	{ href: "/design", label: "/design" },
];

export function Nav() {
	return (
		<header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
			<nav className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="text-sm text-accent hover:underline"
					>
						{link.label}
					</Link>
				))}

				<a
					href="https://github.com/defermata/wakimae"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-accent hover:underline"
				>
					/source-code
				</a>
			</nav>
		</header>
	);
}
