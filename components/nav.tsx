import Link from "next/link";

const links = [
	{ href: "/", label: "/" },
	{ href: "/about", label: "/about" },
];

export function Nav() {
	return (
		<header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
			<nav className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-4">
				{links.map((link) => (
					<Link key={link.href} href={link.href} className="text-sm">
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
