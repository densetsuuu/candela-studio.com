import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {FAQItem} from "@ui/faq";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";

export const FaqSection = () => {
    const faqs = [
        {
            question: "Quels types de projets réalisez-vous ?",
            answer:
                "Nous travaillons principalement sur le développement de sites web, d’applications web (frontend et/ou backend), de sites e-commerce, et d’applications mobiles. Que ce soit pour créer un projet de A à Z ou intervenir sur un projet existant, nous nous m’adaptons à vos besoins.",
        },
        {
            question: "Proposez-vous un suivi ou une maintenance après livraison ?\n",
            answer:
                "Bien sûr ! Nous proposons des services de maintenance et de suivi pour nous assurer que votre projet fonctionne parfaitement après sa livraison. Cela inclut les mises à jour, la correction de bugs et l'ajout de nouvelles fonctionnalités si nécessaire.",
        },
        {
            question: "Travaillez-vous à distance ou sur site ?",
            answer:
                "Nous travaillons principalement à distance, ce qui nous permet de collaborer avec des clients partout en France (et au-delà). Des déplacements ponctuels peuvent être envisagés selon les besoins.",
        },
        {
            question: "Comment se déroule le processus de développement ?",
            answer:
                "Nous commençons par une phase de découverte pour comprendre vos besoins, suivie de la conception et du développement. Nous vous tenons informé à chaque étape et nous assurons que le projet correspond à vos attentes avant la livraison finale.",
        },
        {
            question: "Quels outils ou technologies utilisez-vous ?",
            answer:
                "Nous utilisons une variété de technologies modernes adaptées à chaque projet, notamment React, Next.js, Node.js, et bien d'autres. Nous choisissons les outils en fonction des besoins spécifiques de votre projet.",
        },
        {
            question: "Proposez-vous des solutions d'hébergement ?",
            answer:
                "Oui, nous pouvons vous aider à choisir et configurer un hébergement adapté à votre projet, que ce soit sur des plateformes cloud ou des serveurs dédiés.",
        }
    ]

    return (
        <div className="flex flex-col items-center gap-4">
            <NeumorphEyebrow intent="primary" className="text-2xl">FAQ</NeumorphEyebrow>
            <SectionTitle>Questions fréquentes</SectionTitle>
            <SectionDescription className="text-center">
                Trouvez ici les réponses aux questions les plus courantes sur nos services de développement web et
                mobile.
            </SectionDescription>
            <div className="space-y-5 mt-4 w-sm md:w-3xl px-4 xs:px-0">
                {faqs.map((faq, index) => (
                    <FAQItem question={faq.question} answer={faq.answer} index={index} key={index}/>
                ))}
            </div>
        </div>
    )
}