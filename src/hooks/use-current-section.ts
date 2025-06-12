import { useEffect, useState } from "react";

export default function useCurrentSection() {
	const [currentSection, setCurrentSection] = useState<string>("home");
	const sections = ["expertise", "about", "faq", "contact"];
	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const section = sections.find((section) => {
			const element = document.getElementById(section);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				return (
					scrollPosition >= offsetTop &&
					scrollPosition < offsetTop + offsetHeight
				);
			}
		});
		if (section) {
			setCurrentSection(section);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return currentSection.toFilmCase();
}
