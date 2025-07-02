import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";
import ArgumentsList from "@components/sections/why-us/arguments-list";

export function ArgumentsSection() {

    return (
        <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-950/70 border-y">
            <div className="mx-auto max-w-7xl text-center flex flex-col items-center justify-center gap-4">
                <NeumorphEyebrow intent="primary" className="text-2xl">
                    Pourquoi nous choisir ?
                </NeumorphEyebrow>

                <SectionTitle>
                    Notre méthode
                </SectionTitle>

                <SectionDescription>
                    Candela Studio vous accompagne dans la création de solutions web adaptées à vos besoins.
                </SectionDescription>

                <div className="my-6 w-full">
                    <ArgumentsList/>
                </div>
            </div>

        </div>

    )
}