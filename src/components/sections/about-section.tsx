import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import { Button } from "@ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {

	return (
		<div className="flex flex-row gap-20">
			<div className="w-[400px] h-[500px] bg-slate-200 rounded-xl">
			</div>
			<div className="w-80 flex flex-col gap-8">
				<NeumorphEyebrow intent="primary">A propos</NeumorphEyebrow>
				<h1 className="text-3xl">Derrière le studio, une vision claire</h1>
				<p>Je suis un développeur passionné, curieux et rigoureux, animé par l’envie de transformer les idées en
					expériences numériques claires, efficaces et durables.</p>
				<Button className="w-fit">
					Me contacter
					<ArrowRight className="size-4"/>
				</Button>
			</div>
		</div>
	)
}