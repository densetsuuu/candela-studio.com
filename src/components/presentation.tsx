import { SparklesText } from "@components/magicui/sparkles-text";

export function Presentation() {
	return (
		<div className="flex flex-col sm:text-left text-center mt-36 z-30">
			<h1
				className=" max-w-272 font-heading text-3xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
				We are <SparklesText
				className="inline bg-slate-200/70 rounded-xl px-3 text-3xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">Candela</SparklesText>,
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