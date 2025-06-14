"use client";

import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Navbar as NavbarComponent, NavbarCenter, NavbarLeft, NavbarRight } from "@ui/navbar";
import { Icons } from "@components/icons";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@ui/navigation-menu";
import { ToggleTheme } from "@components/toggle-theme";
import { Button } from "@ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => {
	return (
		<header className={cn("sticky top-0 z-50")}>
			<div className="fade-bottom bg-background/15 absolute left-0 h-18 w-full backdrop-blur-lg"></div>
			<div className="max-w-container relative mx-5 md:mx-20">
				<NavbarComponent>
					<NavbarLeft className="w-1/2 md:w-1/3">
						<a
							href="#"
							className="flex items-center gap-2 text-xl font-bold"
							aria-label="Logo Candela Studio"
						>
							<Icons.logo className="size-10 fill-black dark:fill-white"/>
						</a>
					</NavbarLeft>
					<NavbarCenter className="w-1/3 hidden lg:flex">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<Button variant="link" asChild className="text-inherit">
										<Link href="#home">Expertise</Link>
									</Button>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Button variant="link" asChild className="text-inherit">
										<Link href="#about">À propos</Link>
									</Button>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Button variant="link" asChild className="text-inherit">
										<Link href="#faq">FAQ</Link>
									</Button>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Button variant="link" asChild className="text-inherit">
										<Link href="#contact">Contact</Link>
									</Button>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</NavbarCenter>
					<NavbarRight className="w-1/2 md:w-1/3">
						<Button>
							Recevoir un devis <ArrowUpRight/>
						</Button>
						<ToggleTheme/>
					</NavbarRight>
				</NavbarComponent>
			</div>
		</header>
	);
}