import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function SectionDescription(props: ComponentProps<"p">) {
	return (
		<p
			{...props}
			className={cn("text-md text-muted-foreground max-w-xl", props.className)}
		/>
	)
}