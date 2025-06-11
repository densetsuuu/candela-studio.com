import { SparklesText } from "@components/magicui/sparkles-text";

export function Presentation() {
	return (
		<div className="flex flex-col sm:text-left text-center mt-10">
			<h1 className=" max-w-272 font-heading text-3xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
				We are&nbsp;<SparklesText
				className="inline bg-slate-200/70 dark:bg-slate-200/10 rounded-xl px-3">Candela</SparklesText>,
				the
				only
				web agency you
				need to
				fully
				express yourself.
			</h1>
		</div>
	);
}