"use client";

import { AboutSection } from "@/components/sections/about-section";
import { HomeSection } from "@/components/sections/home-section";
import useCurrentSection from "@/hooks/use-current-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@ui/breadcrumb";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import { FaqSection } from "@components/sections/faq-section";

type Section = {
	key: string;
	component: React.ReactNode;
};

const sections: Section[] = [
	{
		key: "home",
		component: <HomeSection/>,
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
			<main>
				{sections.map(({ key, component }) => (
					<section key={key} id={key}
									 className="sm:px-40 flex flex-col justify-around min-h-screen items-center snap-start">
						{component}
					</section>
				))}

				<AboutSection/>
			</main>

			<div className="sticky bottom-4 ml-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<SlashIcon/>
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/currentSection">{currentSection}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</>
	)
		;
}
