import Link from "next/link";

const links = [
	{ href: "/", label: "/" },
	{ href: "/about", label: "/about" },
];

export function Nav() {
	return (
		<header className="sticky top-0">
			<nav className="mx-auto flex h-14 items-center gap-6 px-4">
				{links.map((link) => (
					<Link key={link.href} href={link.href} className="text-sm">
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
