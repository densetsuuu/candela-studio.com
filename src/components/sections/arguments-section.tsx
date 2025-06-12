import { cn } from "@/lib/utils";
import { ArgumentCard } from "@components/sections/arguments/argument-card";
import { Mail } from "lucide-react";
import NeumorphEyebrow from "@ui/neumorph-eyebrow";

export function ArgumentsSection() {

	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:20px_20px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
				)}
			/>
			<div
				className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			<div className="flex flex-col items-center z-20 text-center justify-start">
				<NeumorphEyebrow intent="primary" className="text-2xl">Pourquoi choisir Candela Studio ?</NeumorphEyebrow>
				<h1 className="text-3xl leading-20">Une lumière claire pour guider vos projets numériques</h1>
				<p>Chez Candela Studio, nous pensons que la lumière n’est pas qu’un symbole : c’est une approche.
					Clarté
					stratégique, rigueur technique et transmission fluide sont les trois piliers de notre méthode. Résultat : des
					projets numériques qui illuminent votre vision et captivent votre audience.</p>

				<div className="flex flex-row flex-wrap gap-3 my-6">
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