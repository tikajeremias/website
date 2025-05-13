import { Button } from "@/components/ui/button";
import Text from "../components/Text";
import { Data } from "../data/Data";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Works() {

    const Works = Data.works.works

    return (
        <div className="w-full flex gap-4 flex-col flex-wrap items-start justify-center">
            <Text variant="default">{Data.works.title}</Text>
            <div className="w-full flex flex-row flex-wrap gap-4 items-center justify-center">
                {Works.map((work, index) =>

                    <div key={index} className="w-[350px] p-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">

                        <div className="w-full h-full flex flex-col gap-2">

                            <div className="h-1/2 flex flex-col gap-2 overflow-hidden">
                                <Avatar variant="card" img={work.icon} />
                                <Text variant="default">{work.name}</Text>
                                <Text variant="small">{work.desciption}</Text>
                                <div className="flex justify-start items-center flex-wrap gap-2 mb-2">
                                    {work.stack.map((tech, i) => (
                                        <Badge key={i}>{tech}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="h-1/2 overflow-hidden">
                                <div className="flex justify-between">
                                    <div className="w-full px-6 py-4 bg-gray-50 flex flex-wrap items-center justify-end">
                                        {/* <a href={work.github} target="_blank" rel="noopener noreferrer"
                                            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                        >Github</a> */}
                                        {/* {
                                            work.dockerhub &&
                                            (<a href={work.dockerhub} target="_blank" rel="noopener noreferrer"
                                                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                            >Dockerhub</a>)
                                        } */}
                                        {
                                            work.url &&
                                            <a href={work.url} target="_blank" rel="noopener noreferrer"
                                                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                            >Visit</a>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
