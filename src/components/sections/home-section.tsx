import { CallToAction } from "../call-to-action"
import { Presentation } from "../presentation"
import { ScrollLabel } from "../scroll-label"

export const HomeSection = () => {

	return (
		<>
			<div className="flex flex-col items-center gap-4 sm:items-start">
				<Presentation/>
				<CallToAction/>
			</div>
			<ScrollLabel/>
		</>
	)
}