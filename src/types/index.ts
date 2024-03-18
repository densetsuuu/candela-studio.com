export type SiteConfig = {
	title: string;
	description: string;
	author: string;
	url: string;
	email: string;
	logo: string;
	links: {
		twitter: string;
		github: string;
		linkedin: string;
	};
};

export type NavItem = {
	title: string;
	href: string;
	disabled?: boolean;
};

export type NavItems = NavItem[];

export type NavConfig = {
	items: NavItems;
};

export type BackgroundConfig = {
	opacity: string;
	filter: {
		frequency: number;
		nbOctaves: number;
	};
};
