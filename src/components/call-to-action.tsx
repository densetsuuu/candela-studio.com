"use client";

import { Button } from "@ui/button";
import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
	return (
		<div className="flex gap-5">
			<Button className="rounded-none" size="lg">
				Recevoir un devis <ArrowUpRight/>
			</Button>
			<Button variant="outline" className="rounded-none" size="lg">
				Nous contacter
			</Button>
		</div>
	);
}
