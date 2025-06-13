import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import { Button } from "@ui/button";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@components/section-title";
import { SectionDescription } from "@components/section-description";
import { Avatar, AvatarImage } from "@ui/avatar";

export function AboutSection() {
	return (
		<div className="w-full flex flex-col gap-8 items-center text-center md:text-left">
			<NeumorphEyebrow intent="primary">À propos</NeumorphEyebrow>
			<SectionTitle>Derrière le studio, une vision claire</SectionTitle>
			<SectionDescription className="text-center italic max-w-sm md:max-w-lg">
				“Je suis un développeur passionné, curieux et rigoureux, animé par l’envie de transformer les idées en
				expériences numériques claires, efficaces et durables.”
			</SectionDescription>
			<div className="flex flex-row items-center justify-center gap-4">
				<Avatar className="size-12">
					<AvatarImage src="/images/portrait.jpg" draggable={false}/>
				</Avatar>
				<div className="flex flex-col items-start">
					<p className="text-md text-gray-500 dark:text-gray-200 font-semibold">
						Raphaël A.
					</p>
					<p className="text-xs text-gray-500 dark:text-gray-400">
						CEO Candela Studio
					</p>
				</div>
			</div>
			<Button className="w-2/3 md:w-fit">
				Me contacter
				<ArrowRight className="size-4 ml-2"/>
			</Button>
		</div>
	)
}
