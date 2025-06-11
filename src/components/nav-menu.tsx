"use client";

import { Button } from "@ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Icons } from "@components/icons";

export const NavMenu = (props: NavigationMenuProps) => (
	<NavigationMenu className="sticky top-0 h-20 max-w-full justify-around" {...props}>
		<NavigationMenuList className="flex">
			<NavigationMenuItem>
				<Icons.logo className="size-10"/>
			</NavigationMenuItem>
		</NavigationMenuList>
		<NavigationMenuList className="gap-0 space-x-0 text-sm">
			<NavigationMenuItem>
				<Button variant="link" className="text-[15px] font-normal" asChild>
					<Link href="#">home</Link>
				</Button>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Button variant="link" className="text-[15px] font-normal" asChild>
					<Link href="#">about</Link>
				</Button>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Button variant="link" className="text-[15px] font-normal" asChild>
					<Link href="#faq">faq</Link>
				</Button>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Button variant="link" className="text-[15px] font-normal" asChild>
					<Link href="#">contact</Link>
				</Button>
			</NavigationMenuItem>
		</NavigationMenuList>
		<NavigationMenuList>
			<NavigationMenuItem>
				<Button>
					Get Started <ArrowUpRight/>
				</Button>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
);

const ListItem = React.forwardRef<
	React.ElementRef<typeof Link>,
	React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<props.icon className="mb-4 h-6 w-6"/>
					<div className="text-sm font-semibold leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
