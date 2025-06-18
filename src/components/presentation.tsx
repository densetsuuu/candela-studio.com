import {SparklesText} from "@components/magicui/sparkles-text";

export function Presentation() {
    return (
        <div className="flex flex-col text-center items-center gap-3">
            <h1
                className="max-w-96 md:max-w-200 font-heading mt-24
					text-3xl/normal md:text-4xl/normal lg:text-5xl/normal">
                Exprimez pleinement votre <SparklesText
                className="inline bg-slate-200/70 dark:bg-slate-200/10 rounded-xl px-2 break-all">vision</SparklesText>
            </h1>
            <p className="font-bold text-md sm:text-base lg:text-xl mb-6 sm:mb-8 md:mb-12 mx-auto max-w-2xl text-gray-700 dark:text-gray-300 p-3 sm:p-4">
                Agence de design et développement web, nous créons des expériences numériques innovantes et accessibles
                pour
                donner vie à vos idées.
            </p>
        </div>
    );
}