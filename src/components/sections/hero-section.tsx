import {Cta} from "../cta"
import {Presentation} from "../presentation"

export const HeroSection = () => {

    return (
        <div className="flex flex-col items-center w-full relative container mx-auto">
            <Presentation/>
            <Cta/>
        </div>
    )
}