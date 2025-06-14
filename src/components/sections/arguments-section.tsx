import { cn } from "@/lib/utils";
import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import { SectionTitle } from "@components/section-title";
import { SectionDescription } from "@components/section-description";
import ArgumentsList from "@components/sections/arguments/arguments-list";

export function ArgumentsSection() {

	return (
		<div className="relative w-full bg-background/10 py-24 px-4 sm:px-6 lg:px-8">
			<div
				className={cn(
					"absolute inset-0 -z-10",
					"[background-size:20px_20px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
				)}
			/>

			<div className="mx-auto max-w-7xl text-center flex flex-col items-center justify-center gap-4">
				<NeumorphEyebrow intent="primary" className="text-2xl">
					Pourquoi choisir Candela Studio ?
				</NeumorphEyebrow>

				<SectionTitle>
					Une approche centrée sur l&apos;expérience utilisateur
				</SectionTitle>

				<SectionDescription>
					Chez Candela Studio, nous pensons que la lumière n’est pas qu’un symbole : c’est une approche.
				</SectionDescription>

				<div className="my-6 w-full">
					<ArgumentsList/>
				</div>
			</div>

			{/* Radial mask */}
			<div
				className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"/>
		</div>

	)
}