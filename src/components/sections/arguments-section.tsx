import {cn} from "@/lib/utils";
import {ArgumentCard} from "@components/sections/arguments/argument-card";
import {Mail} from "lucide-react";
import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";

export function ArgumentsSection() {

	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-background/10">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:20px_20px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
				)}
			/>
			<div
				className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
			<div className="flex flex-col items-center z-20 text-center justify-start gap-4">
				<NeumorphEyebrow intent="primary" className="text-2xl">Pourquoi choisir Candela Studio ?</NeumorphEyebrow>
				<SectionTitle>Une lumière claire pour guider vos projets numériques</SectionTitle>
				<SectionDescription className="w-2/3">Chez Candela Studio, nous pensons que la lumière n’est pas qu’un symbole : c’est une
					approche.</SectionDescription>

				<div className="flex flex-row flex-wrap gap-3 my-6 items-center justify-center">
					<ArgumentCard title={"test"} description={"test"}>
						<Mail className="size-10 dark:fill-neutral-200"/>
					</ArgumentCard>
					<ArgumentCard title={"test"} description={"test"}>
						<Mail className="size-10 dark:fill-neutral-200"/>
					</ArgumentCard>
					<ArgumentCard title={"test"} description={"test"}>
						<Mail className="size-10 dark:fill-neutral-200"/>
					</ArgumentCard>
				</div>
			</div>
		</div>
	)
}