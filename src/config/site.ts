import { BackgroundConfig, NavConfig, NavItem, SiteConfig } from "@/types";

//#region SiteConfig
export const siteConfig: SiteConfig = {
	title: "Candela Studio",
	description:
		"My open source website crafted with NextJS and Shadcn/UI.",
	author: "Raphael ALARCON",
	url: "",
	email: "raph.alarcon1@gmail.com",
	logo: "",
	links: {
		github: "https://github.com/densetsuuu",
		linkedin: "https://www.linkedin.com/in/raphael-alarcon/",
	},
};
//#endregion

//#region Navigation
export const logoConfig: NavItem = {
	title: "Candela Studio",
	href: "#home",
};

export const navConfig: NavConfig = {
	items: [
		{
			title: "About",
			href: "#about",
		},
		{
			title: "My work",
			href: "#work",
		},
		{
			title: "Contact",
			href: "#contact",
		},
	],
};
//#endregion

//#region Background
export const backgroundConfig: BackgroundConfig = {
	opacity: "0.2",
	filter: {
		frequency: 5,
		nbOctaves: 3,
	},
};
//#endregion
