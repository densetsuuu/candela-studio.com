import { CallToAction } from "../call-to-action"
import { Presentation } from "../presentation"
import { ScrollLabel } from "../scroll-label"

export const HeroSection = () => {

	return (
		<>
			<div className="flex flex-col gap-3 items-center sm:items-start">
				<Presentation/>
				<CallToAction/>
			</div>
			<ScrollLabel/>
		</>
	)
}