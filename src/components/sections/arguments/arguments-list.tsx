import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Bot, Hand, MonitorSmartphone, Rocket, ScanFaceIcon, Server, } from "lucide-react";

const actions = [
	{
		title: "Respect du référentiel RGAA",
		description:
			"Chaque site est conçu dans le respect strict du RGAA pour garantir une accessibilité universelle.",
		href: "#",
		icon: ScanFaceIcon,
		iconForeground: "text-green-700",
		iconBackground: "bg-green-50 dark:bg-green-950/30",
		ringColorClass: "ring-green-700/30",
	},
	{
		title: "Design mobile-first",
		description:
			"Une approche pensée dès le départ pour le mobile, afin d’assurer une expérience fluide sur tous les supports.",
		href: "#",
		icon: MonitorSmartphone,
		iconForeground: "text-red-700",
		iconBackground: "bg-red-50 dark:bg-red-950/30",
		ringColorClass: "ring-red-700/30",
	},
	{
		title: "Maintenance et support",
		description:
			"Un accompagnement fiable et réactif pour assurer la stabilité et la longévité de votre site.",
		href: "#",
		icon: Server,
		iconForeground: "text-blue-700",
		iconBackground: "bg-blue-50 dark:bg-blue-950/30",
		ringColorClass: "ring-blue-700/30",
	},
	{
		title: "Performance et SEO",
		description:
			"Optimisation des temps de chargement, du code et du référencement pour un site rapide et bien positionné.",
		href: "#",
		icon: Rocket,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50 dark:bg-sky-950/30",
		ringColorClass: "ring-sky-700/30",
	},
	{
		title: "IA et solutions personnalisées",
		description:
			"Des fonctionnalités sur mesure, boostées par l’intelligence artificielle pour répondre à vos besoins spécifiques.",
		href: "#",
		icon: Bot,
		iconForeground: "text-pink-700",
		iconBackground: "bg-pink-50 dark:bg-pink-950/30",
		ringColorClass: "ring-pink-700/30",
	},
	{
		title: "Confiance et sécurité des données",
		description:
			"Sécurité, confidentialité, conformité : vos données sont protégées selon les standards les plus exigeants.",
		href: "#",
		icon: Hand,
		iconForeground: "text-orange-700",
		iconBackground: "bg-orange-50 dark:bg-orange-950/30",
		ringColorClass: "ring-orange-700/30",
	},
];

export default function ArgumentsList() {
	return (
		<div className="flex items-center justify-center p-8">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-start">
				{actions.map((action) => (
					<Card
						key={action.title}
						className={cn(
							"group relative rounded-xl border-0 bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"
						)}
					>
						<CardContent className="p-6">
							<div>
                <span
									className={cn(
										action.iconBackground,
										action.iconForeground,
										"inline-flex rounded-lg p-3 ring-2 ring-inset",
										action.ringColorClass
									)}
								>
                  <action.icon aria-hidden="true" className="h-6 w-6"/>
                </span>
							</div>
							<div className="mt-4">
								<h3 className="text-base font-semibold text-foreground">
									<a href={action.href} className="focus:outline-none">
										<span aria-hidden="true" className="absolute inset-0"/>
										{action.title}
									</a>
								</h3>
								<p className="mt-2 text-sm text-muted-foreground">
									{action.description}
								</p>
							</div>
							<span
								aria-hidden="true"
								className="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-muted-foreground/60"
							>
                <ArrowUpRight className="h-6 w-6"/>
              </span>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}