import {Card, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {CheckCircle2, Goal, RepeatIcon, SearchIcon, SlidersHorizontalIcon,} from "lucide-react";

const actions = [
    {
        title: "Comprendre vos enjeux",
        description:
            "Écoute active de vos besoins pour définir une solution qui correspond à vos attentes.",
        href: "#contact",
        icon: SearchIcon, // Représente la recherche, la phase d’analyse
        iconForeground: "text-green-700",
        iconBackground: "bg-green-50 dark:bg-green-950/30",
        ringColorClass: "ring-green-700/30",
    },
    {
        title: "Concevoir avec précision",
        description:
            "Sélection des outils techniques en fonction de vos contraintes et objectifs.",
        href: "#contact",
        icon: SlidersHorizontalIcon, // Souplesse, personnalisation, ajustements
        iconForeground: "text-red-700",
        iconBackground: "bg-red-50 dark:bg-red-950/30",
        ringColorClass: "ring-red-700/30",
    },
    {
        title: "Adapter les solutions",
        description:
            "Livraisons régulières pour suivre ensemble les avancées du développement.",
        href: "#contact",
        icon: Goal, // Objectifs, stratégie, précision
        iconForeground: "text-blue-700",
        iconBackground: "bg-blue-50 dark:bg-blue-950/30",
        ringColorClass: "ring-blue-700/30",
    },
    {
        title: "Accompagner dans la durée",
        description:
            "Suivi de votre solution et de l'évolution de vos besoins sur le long terme.",
        href: "#contact",
        icon: RepeatIcon, // Cycle, suivi, amélioration continue
        iconForeground: "text-pink-700",
        iconBackground: "bg-pink-50 dark:bg-pink-950/30",
        ringColorClass: "ring-pink-700/30",
    },
];


export default function ArgumentsList() {
    return (
        <div className="flex items-center justify-center py-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-start">
                {actions.map((action) => (
                    <Card
                        key={action.title}
                        className={cn(
                            "hover:scale-105 hover:rotate-1 hover:drop-shadow-md transition-transform duration-300 ease-in-out",
                            "bg-white border group relative rounded-xl dark:bg-card p-0 focus-within:ring-2 focus-within:ring-ring focus-within:ring-inset"
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
                                className="pointer-events-none absolute top-6 right-6 text-muted-foreground/50 group-hover:text-green-600 transition-colors duration-300"
                            >
                                <CheckCircle2
                                    className="h-6 w-6 ring-green-700/30 rounded-full"/>
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}