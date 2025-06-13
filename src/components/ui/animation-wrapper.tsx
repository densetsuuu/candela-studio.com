"use client";

import { motion } from "framer-motion";
import React from "react";

// Animation variants for each child
const bounceVariant = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.68, -0.55, 0.27, 1.55],
		},
	},
};

// Parent container to stagger animations
const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export function AnimatedWrapper({ children }: { children: React.ReactNode }) {
	// Recursive function to wrap every child element
	const wrapChildren = (children: React.ReactNode): React.ReactNode => {
		return React.Children.map(children, (child) => {
			if (!React.isValidElement(child)) return child;

			// Recurse into children
			const wrapped = child.props?.children
				? {
					...child,
					props: {
						...child.props,
						children: wrapChildren(child.props.children),
					},
				}
				: child;

			return (
				<motion.div variants={bounceVariant}>
					{wrapped}
				</motion.div>
			);
		});
	};

	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={container}
		>
			{wrapChildren(children)}
		</motion.div>
	);
}
