import { Icons } from "@/components/icons";
import Image from "next/image";
import { Card, CardHeader } from "@ui/card";

export type Project = {
    title: string;
    icon: keyof typeof Icons;
    description: string;
    image: string;
    url: string;
    color?: string;
};

type ProjectProps = {
    project: Project;
};

export const Project = ( {project}: ProjectProps ) => {
}