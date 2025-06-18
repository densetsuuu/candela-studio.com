import {Cta} from "../cta"
import {Presentation} from "../presentation"

export const HeroSection = () => {

    return (
        <div className="flex flex-col items-center w-full relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen">
            <Presentation/>
            <Cta/>
        </div>
    )
}