import { Badge } from "@/components/ui/badge";
import Text from "../components/Text";
import { Data } from "../data/Data";

export default function About() {

    const Stack = Data.about.stack

    return (
        <div className="flex gap-2 flex-col flex-wrap items-start justify-center">
            <Text variant="default">{Data.about.title}</Text>
            <Text variant="small">{Data.about.description}</Text>
            <div className="pt-2 flex justify-start items-center flex-wrap gap-2 mb-4">
                {Stack.map((tech, i) => (
                    <Badge key={i}>{tech.title}</Badge>
                ))}
            </div>
        </div>
    )
}
