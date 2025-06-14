//#region Imports
import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavMenu } from "@components/nav-menu";
import { ThemeProvider } from "@components/theme-provider";
import React from "react";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
	metadataBase: new URL('https://candela-studio.com'),
	description: "Candela Studio - Développement web sur mesure, accessible et performant. Spécialisé dans la création d'applications web, le respect du RGAA, et l'optimisation SEO.",
	title: "Candela Studio - Développement web",
	authors: {
		name: "Raphaël Alarçon",
		url: "https://github.com/densetsuuu",
	},
	openGraph: {
		url: "https://candela-studio.com",
		siteName: "Candela Studio",
		type: "website",
		locale: "fr_FR",
	},
	applicationName: "Candela Studio",
	appleWebApp: {
		title: "Candela Studio",
		statusBarStyle: "default",
		capable: true
	},
	verification: {
		google: 'google',
		yandex: 'yandex',
		yahoo: 'yahoo',
		other: {
			me: ['my-email', 'my-link'],
		},
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow"
	},
	keywords: [
		"développement web",
		"développeur web",
		"applications web",
		"accessibilité numérique",
		"performance web",
		"rgaa",
		"mobile first",
		"maintenance web",
		"agence web bordeaux",
		"agence web france",
		"developpement mobile",
		"ia",
		"nextjs",
		"seo",
		"react",
		"backend",
		"frontend",
		"referencement",
		"intelligence artificielle",
		"solutions personnalisées",
		"adonisjs",
		"freelance",
		"agence web gradignan",
		"agence web merignac"
	]
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
		<body
			className={cn(
				"antialiased font-sans bg-background text-foreground overscroll-none",
				fontHeading.variable,
				fontSans.variable
			)}>
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<div className="font-sans">
				<div
					className="absolute inset-0 z-[-2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
				<NavMenu/>
				{children}
			</div>
			<Analytics/>
			<SpeedInsights/>
		</ThemeProvider>
		</body>
		</html>
	);
}
