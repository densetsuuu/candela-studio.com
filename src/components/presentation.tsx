import { SparklesText } from "@components/magicui/sparkles-text";

export function Presentation() {
	return (
		<div className="flex flex-col text-center sm:text-left w-full items-center md:items-start gap-4 md:gap-0">
			<h1
				className="max-w-96 md:max-w-272 font-heading text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
				Exprimez pleinement votre vision avec <SparklesText
				className="inline bg-slate-200/70 dark:bg-slate-200/10 rounded-xl px-2 break-all">Candela Studio</SparklesText>
			</h1>
			<p className="text-muted-foreground text-md text-balance">
				Agence de design et développement web, nous créons des expériences numériques innovantes et accessibles pour
				donner vie à vos idées.
			</p>
		</div>
	);
}