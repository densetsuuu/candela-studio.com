import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
	return (
		<footer className="w-full grid place-items-center mt-20 xl:mt-0 text-muted-foreground" id="page-footer">
			<div className="px-10 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between w-full h-20">
				<p className="text-sm dark:text-gray-400">
					© {new Date().getFullYear()} Candela Studio. Tous droits réservés.
				</p>
				<div
					className="flex flex-row gap-2">
					<Link href="https://www.linkedin.com/in/raphael-alarcon/" className="group" target="_blank"
								aria-label="Link to LinkedIn profile">
						<LinkedInLogoIcon
							className="size-5 group-hover:text-gray-700"/>
					</Link>
					<Link href="https://github.com/densetsuuu" className="group" target="_blank"
								aria-label="Link to Github profile">
						<GitHubLogoIcon className="size-5 group-hover:text-gray-700"/>
					</Link>
				</div>

				<div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-4 md:pb-0">
					<Link className="text-xs dark:text-gray-400" href="/privacy-policy">
						Politique de confidentialité
					</Link>
					<Link className="text-xs dark:text-gray-400" href="/terms-of-service">
						Conditions d&apos;utilisation
					</Link>
				</div>
			</div>
		</footer>
	)
}