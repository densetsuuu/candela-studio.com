import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {FAQItem} from "@ui/faq";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";

export const FaqSection = () => {
	const faqs = [
		{
			question: "Quels types de projets réalisez-vous ?",
			answer:
				"Je travaille principalement sur le développement de sites web, d’applications web (frontend et/ou backend), de sites e-commerce, et d’applications mobiles. Que ce soit pour créer un projet de A à Z ou intervenir sur un projet existant, je m’adapte à vos besoins.",
		},
		{
			question: "Proposez-vous un suivi ou une maintenance après livraison ?\n",
			answer:
				"Bien sûr ! Je propose des services de maintenance et de suivi pour m'assurer que votre projet fonctionne parfaitement après sa livraison. Cela inclut les mises à jour, la correction de bugs et l'ajout de nouvelles fonctionnalités si nécessaire.",
		},
		{
			question: "Travaillez-vous à distance ou sur site ?",
			answer:
				"Je travaille principalement à distance, ce qui me permet de collaborer avec des clients partout en France (et au-delà). Des déplacements ponctuels peuvent être envisagés selon les besoins.",
		},
	]

	return (
		<div className="flex flex-col items-center max-w-xl gap-4">
			<NeumorphEyebrow intent="primary" className="text-2xl">FAQ</NeumorphEyebrow>
			<SectionTitle>Questions fréquentes</SectionTitle>
			<SectionDescription className="text-center">
				Trouvez ici les réponses aux questions les plus courantes sur mes services de développement web et mobile.
			</SectionDescription>
			<div className="w-[800px] space-y-5 mt-4">
				{faqs.map((faq, index) => (
					<FAQItem question={faq.question} answer={faq.answer} index={index} key={index}/>
				))}
			</div>
		</div>
	)
}