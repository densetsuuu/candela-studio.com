"use client";

import { AboutSection } from "@components/sections/about-section";
import { HeroSection } from "@components/sections/hero-section";
import useCurrentSection from "@/hooks/use-current-section";
import { FaqSection } from "@components/sections/faq-section";
import { ArgumentsSection } from "@components/sections/arguments-section";

type Section = {
	key: string;
	component: React.ReactNode;
};

const sections: Section[] = [
	{
		key: "expertise",
		component: <HeroSection/>,
	},
	{
		key: "why-us",
		component: <ArgumentsSection/>,
	},
	{
		key: "about",
		component: <AboutSection/>,
	},
	{
		key: "faq",
		component: <FaqSection/>,
	},
];

export default function IndexPage() {
	const currentSection = useCurrentSection();

	return (
		<>
			<main className="relative">
				{sections.map(({ key, component }) => (
					<section key={key} id={key}
									 className="sm:mx-40 flex flex-col justify-evenly min-h-screen items-center">
						{component}
					</section>
				))}
			</main>

			<footer className="w-full grid place-items-center">
				<div className="px-10 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between w-full h-20">
					<p className="text-sm text-gray-500 dark:text-gray-400">
						© {new Date().getFullYear()} Candela Studio. All rights reserved.
					</p>
					<div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-4 md:pb-0">
						<a className="text-xs text-gray-500 dark:text-gray-400">
							Politique de confidentialité
						</a>
						<a className="text-xs text-gray-500 dark:text-gray-400">
							Conditions d&apos;utilisation
						</a>
					</div>
				</div>
			</footer>
		</>
	)
		;
}
