import Cal, {getCalApi} from "@calcom/embed-react";
import {useEffect} from "react";
import NeumorphEyebrow from "@ui/neumorph-eyebrow";
import {SectionTitle} from "@components/section-title";
import {SectionDescription} from "@components/section-description";


export default function ContactSection() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace": "30min"});
            cal("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
        })();
    }, [])

    return (
        <div className="flex flex-col w-full items-center gap-12 mb-12">
            <div className="mx-auto max-w-7xl text-center flex flex-col items-center justify-center gap-4">
                <NeumorphEyebrow intent="primary">Nous contacter</NeumorphEyebrow>
                <SectionTitle>Donnons vie à votre projet</SectionTitle>
                <SectionDescription>
                    Discutons-en ensemble ! Nous sommes là pour vous aider à concrétiser vos idées et à créer des
                    expériences
                    numériques
                </SectionDescription>
            </div>
            <Cal namespace="30min"
                 calLink="raphael-alarcon/30min"
                 style={{width: "70%", height: "60%", overflow: "scroll"}}
                 config={{"layout": "month_view"}}


            />
        </div>
    )
};