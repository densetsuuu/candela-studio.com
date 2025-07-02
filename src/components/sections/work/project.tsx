import {Icons} from "@/components/icons";
import {Card} from "@ui/card";

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

export const Project = ({project}: ProjectProps) => {
    return (
        <Card>

        </Card>
    )
}