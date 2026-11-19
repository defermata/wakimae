import type { MetadataRoute } from "next";

const baseUrl = "https://wakimae.com";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["/", "/profile", "/design"].map((path) => ({
		url: `${baseUrl}${path}`,
	}));
}
