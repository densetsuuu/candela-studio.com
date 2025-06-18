"use client";

import {AboutSection} from "@components/sections/about-section";
import {HeroSection} from "@components/sections/hero-section";
import {FaqSection} from "@components/sections/faq-section";
import {ArgumentsSection} from "@components/sections/arguments-section";
import ContactSection from "@components/sections/contact-section";

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
    {
        key: "contact",
        component: <ContactSection/>,
    },
];

export default function IndexPage() {
    return (
        <>
            <main className="relative" id="main-content">
                {sections.map(({key, component}) => (
                    <section key={key} id={key} className="min-h-screen">
                        {component}
                    </section>
                ))}
            </main>
        </>
    )
        ;
}
