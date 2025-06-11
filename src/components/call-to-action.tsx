"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@ui/button";

export function CallToAction() {
	return (
		<Button variant={"link"}
						className="font-normal underline underline-offset-10 decoration-1 text-gray-500">
			{siteConfig.email}
		</Button>
	);
}
