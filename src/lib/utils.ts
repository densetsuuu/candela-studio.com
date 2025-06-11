import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

declare global {
	interface String {
		toFilmCase: () => string;
	}
}

String.prototype.toFilmCase = function () {
	return this.replace(/([A-Z])/g, " $1").replace(/^./, (str) =>
		str.toUpperCase()
	);
};