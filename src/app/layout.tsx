//#region Imports
import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Compose, providers } from "@/components/compose";
import { NavMenu } from "@components/nav-menu";
//#endregion

//#region Fonts
const fontSans = Inter({
	weight: "400",
	variable: "--font-sans",
	subsets: ["latin"],
});

const fontHeading = localFont({
	src: "../../public/fonts/TAN-PEARL.woff2",
	weight: "700",
	variable: "--font-heading",
});

//#endregion

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	authors: {
		name: siteConfig.author,
		url: "",
	},
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
		<body
			className={cn(
				"antialiased font-sans",
				fontHeading.variable,
				fontSans.variable
			)}>
		<Compose providers={providers}>
			<div className="font-sans">
				<NavMenu/>
				{children}
			</div>
		</Compose>
		</body>
		</html>
	);
}
