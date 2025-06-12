"use client";

import {Button} from "@ui/button";
import {ArrowUpRight} from "lucide-react";

export function CallToAction() {
	return (
		<div className="flex gap-4">
			<Button className="">
				Recevoir un devis <ArrowUpRight/>
			</Button>
			<Button variant="outline">
				Nous contacter
			</Button>
		</div>
	);
}
