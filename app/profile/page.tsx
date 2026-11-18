import Image from "next/image";

const profile = [
	{ key: "name", value: "Wakimae" },
	{ key: "hobby", value: "Read and write" },
];

export default function Profile() {
	return (
		<div className="py-12">
			<div className="flex gap-8">
				<div className="flex-1">
					<div className="flex flex-col gap-2">
						{profile.map((item) => (
							<div
								key={item.key}
								className="flex gap-4 border-2 border-foreground bg-canvas px-3 py-2"
							>
								<div className="w-20 shrink-0 font-semibold">
									{item.key}
								</div>
								<div className="flex-1">{item.value}</div>
							</div>
						))}
					</div>
				</div>

				<div className="w-1/4 md:w-1/3">
					<div className="h-48 overflow-hidden border-2 border-foreground md:h-72">
						<Image
							src="/reimu.webp"
							alt="Reimu"
							width={962}
							height={1196}
							className="h-full w-full object-cover"
						/>
					</div>

					<div className="mt-2 text-center text-sm">
						art by{" "}
						<a
							href="https://www.pixiv.net/users/11211325"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:underline"
						>
							/CORE
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
