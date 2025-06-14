"use client";

import { Button } from "@ui/button";
import Link from "next/link";
import React from "react";
import { Phone } from "lucide-react";

export function CallToAction() {
	return (
		<div className="flex flex-col sm:flex-row gap-4 w-8/10 sm:w-auto">
			<Button asChild>
				<Link href="#contact">
					Réserver un appel <Phone/>
				</Link>
			</Button>
			<Button variant="outline" asChild>
				<Link href="#about">
					En savoir plus
				</Link>
			</Button>
		</div>
	);
}
