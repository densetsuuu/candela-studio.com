"use client";

import {HeroSection} from "@components/sections/hero-section";
import {FaqSection} from "@components/sections/faq-section";
import {ArgumentsSection} from "@components/sections/arguments-section";
import ContactSection from "@components/sections/contact-section";
import {WorkSection} from "@components/sections/work-section";

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
        component: <WorkSection/>,
    },
    {
        key: "faq",
        component: <FaqSection/>,
    },
    {
        key: "contact",
        component: <ContactSection/>,
    },
];

export default function IndexPage() {
    return (
        <main className="relative flex flex-col gap-40" id="main-content">
            {sections.map(({key, component}) => (
                <section key={key} id={key}>
                    {component}
                </section>
            ))}
        </main>
    );
}
