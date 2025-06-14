import Link from "next/link";

export function ScrollLabel() {

	return (
		<>
			<div className="inline-flex rotate-90 gap-4 items-center">
				<hr className="border-t w-10 border-gray-500 dark:border-gray-300"/>
				<Link
					href="#why-us"
					className="uppercase text-gray-500 text-sm dark:text-gray-300">
					Scroll
				</Link>
			</div>
		</>
	);
}