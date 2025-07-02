import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {SectionTitle} from "@components/section-title";
import React from "react";

export function WorkSection() {
    return (
        <div className="w-full flex flex-col gap-8 items-center text-center md:text-left">
            <div className="gap-4 flex flex-col items-center justify-center">
                <NeumorphEyebrow intent="primary">Nos réalisations</NeumorphEyebrow>
                <SectionTitle>
                    Projets récents
                </SectionTitle>
            </div>
        </div>
    )
}
