import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {Button} from "@ui/button";
import {ArrowRight} from "lucide-react";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";

export function AboutSection() {

	return (
		<div className="flex flex-col gap-20 md:flex-row">
			<div className="w-[400px] h-[500px] bg-slate-200 rounded-xl">
			</div>
			<div className="w-80 flex flex-col gap-8">
				<NeumorphEyebrow intent="primary">A propos</NeumorphEyebrow>
				<SectionTitle>Derrière le studio, une vision claire</SectionTitle>
				<SectionDescription>Je suis un développeur passionné, curieux et rigoureux, animé par l’envie de transformer les idées en
					expériences numériques claires, efficaces et durables.</SectionDescription>
				<Button className="w-fit">
					Me contacter
					<ArrowRight className="size-4"/>
				</Button>
			</div>
		</div>
	)
}