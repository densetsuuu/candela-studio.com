import { CallToAction } from "../call-to-action"
import { Presentation } from "../presentation"
import Image from "next/image";

export const HeroSection = () => {

	return (
		<div className="flex flex-row items-center min-h-screen w-full">
			<div className="flex flex-col gap-5 items-center sm:items-start md:gap-4 w-full md:w-3/4">
				<Presentation/>
				<CallToAction/>
			</div>
			<Image className="object-cover w-64 hidden lg:block" draggable={false}
						 src="/images/mockup.png" alt="Device mockup" width={2000} height={2000}/>
		</div>
	)
}