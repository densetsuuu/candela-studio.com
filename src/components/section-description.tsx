import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function SectionDescription(props: ComponentProps<"p">) {
	return (
		<p
			{...props}
			className={cn("text-center text-md text-muted-foreground max-w-sm md:max-w-lg", props.className)}
		/>
	)
}