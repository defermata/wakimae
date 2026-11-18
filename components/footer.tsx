async function getCurrentYear() {
	"use cache";
	return new Date().getFullYear();
}

export async function Footer() {
	const year = await getCurrentYear();
	return (
		<footer className="border-t-2 border-foreground py-6 text-sm">
			<div className="mx-auto flex max-w-6xl flex-col gap-3 px-4">
				<p>
					This site shares personal hobby projects. Everything here
					can be used for your own projects, business included, at
					your own responsibility.
				</p>

				<p>
					Unless otherwise noted, programs and designs are licensed
					under the{" "}
					<a
						href="https://github.com/defermata/wakimae/blob/main/LICENSE"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:underline"
					>
						GNU General Public License v3.0
					</a>
					.
				</p>

				<p className="text-center">
					<span className="text-warning">*</span>wakimae, {year}
				</p>
			</div>
		</footer>
	);
}
