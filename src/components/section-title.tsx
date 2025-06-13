import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle(props: ComponentProps<"h3">) {
	return (
		<h3
			className={cn("text-xl md:text-3xl font-heading", props.className)}
			{...props}
		/>
	)
}