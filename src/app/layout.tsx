//#region Imports
import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavMenu } from "@components/nav-menu";
import { ThemeProvider } from "@components/theme-provider";
import React from "react";
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
		</ThemeProvider>
		</body>
		</html>
	);
}
