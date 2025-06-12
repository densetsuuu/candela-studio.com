import {SparklesText} from "@components/magicui/sparkles-text";

export function Presentation() {
	return (
		<div className="flex flex-col sm:text-left text-center">
			<h1 className="max-w-96 md:max-w-272 font-heading text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
				Exprimez pleinement votre vision avec&nbsp;<SparklesText
				className="inline bg-slate-200/70 dark:bg-slate-200/10 rounded-xl px-3 break-all">Candela Studio</SparklesText>
				<span className="hidden mb:block">.</span>
			</h1>
		</div>
	);
}