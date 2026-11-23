import type { MetadataRoute } from "next";

const baseUrl = "https://wakimae.com";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		"/",
		"/profile",
		"/design",
		"/design/3d-stl",
		"/design/software-concept",
	].map((path) => ({
		url: `${baseUrl}${path}`,
	}));
}
