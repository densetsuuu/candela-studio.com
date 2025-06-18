import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";
import ArgumentsList from "@components/sections/arguments/arguments-list";

export function ArgumentsSection() {

    return (
        <div className="w-full bg-background/10 py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center flex flex-col items-center justify-center gap-4">
                <NeumorphEyebrow intent="primary" className="text-2xl">
                    Pourquoi choisir Candela Studio ?
                </NeumorphEyebrow>

                <SectionTitle>
                    Une approche centrée sur l&apos;expérience utilisateur
                </SectionTitle>

                <SectionDescription>
                    Chez Candela Studio, nous pensons que la lumière n’est pas qu’un symbole : c’est une approche.
                </SectionDescription>

                <div className="my-6 w-full">
                    <ArgumentsList/>
                </div>
            </div>

        </div>

    )
}