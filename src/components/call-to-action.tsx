"use client";

import { Button } from "@ui/button";
import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
	return (
		<div className="flex gap-5">
			<Button size="lg">
				Recevoir un devis <ArrowUpRight/>
			</Button>
			<Button variant="outline" size="lg">
				Nous contacter
			</Button>
		</div>
	);
}
