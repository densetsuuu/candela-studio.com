import { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";

interface ArgumentCardProps extends PropsWithChildren {
	title: string;
	description: string;
}

export function ArgumentCard({ title, description, children }: ArgumentCardProps) {

	return (
		<Card>
			<CardHeader className="flex flex-col gap-4 justify-center items-center">
				{children}
				<CardTitle>{title}</CardTitle>
			</CardHeader>

			<CardContent className="w-48">
				<p>
					{description}
				</p>
			</CardContent>
		</Card>

	)
}