import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import { Button } from "@ui/button";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@components/section-title";
import { SectionDescription } from "@components/section-description";
import Image from "next/image";

export function AboutSection() {

	return (
		<div className="flex flex-col gap-20 md:flex-row items-center">
			<Image src={"/images/portrait.jpg"} alt="test"
						 className="rounded-xl object-cover" width={500}
						 height={500} draggable={false}/>
			<div className="w-80 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
				<NeumorphEyebrow intent="primary">A propos</NeumorphEyebrow>
				<SectionTitle>Derrière le studio, une vision claire</SectionTitle>
				<SectionDescription className="text-justify md:text-start">Je suis un développeur passionné, curieux et
					rigoureux, animé par l’envie de transformer les idées en
					expériences numériques claires, efficaces et durables.</SectionDescription>
				<Button className="w-full md:w-fit">
					Me contacter
					<ArrowRight className="size-4"/>
				</Button>
			</div>
		</div>
	)
}