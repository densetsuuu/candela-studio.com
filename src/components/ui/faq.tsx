"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
	question: string;
	answer: string;
	index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				delay: index * 0.15,
				ease: "easeOut",
			}}
			className={cn(
				"group rounded-lg border-[2px] border-gray-200/80 dark:border-gray-800/50",
				"transition-all duration-200 ease-in-out",
				isOpen
					? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
					: "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
			)}
		>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
			>
				<h3
					className={cn(
						"text-base font-medium transition-colors duration-200 text-left",
						"text-gray-800 dark:text-gray-300",
						isOpen && "text-gray-900 dark:text-white"
					)}
				>
					{question}
				</h3>
				<motion.div
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.1 : 1,
					}}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
					className={cn(
						"p-0.5 rounded-full shrink-0",
						"transition-colors duration-200",
						isOpen
							? "text-primary"
							: "text-gray-400 dark:text-gray-500"
					)}
				>
					<ChevronDown className="h-4 w-4"/>
				</motion.div>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: {
								height: {
									duration: 0.4,
									ease: [0.04, 0.62, 0.23, 0.98],
								},
								opacity: {
									duration: 0.25,
									delay: 0.1,
								},
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeInOut",
								},
								opacity: {
									duration: 0.25,
								},
							},
						}}
					>
						<div className="px-6 pb-4 pt-2">
							<motion.p
								initial={{ y: -8, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -8, opacity: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}
								className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
							>
								{answer}
							</motion.p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}