import Avatar from "../components/Avatar";
import Text from "../components/Text";
import { Data } from "../data/Data";

export default function Experience() {

    const workExperience = Data.workExperience.works

    return (
        <div className="w-full flex gap-2 flex-col flex-wrap items-start justify-center">

            <Text variant="default">{Data.workExperience.title}</Text>

            <div className="w-full flex flex-col gap-2">

                {
                    workExperience.map((work, index) =>
                        <div key={index} className="w-full p-4 rounded-lg flex justify-center items-center flex-row gap-2 shadow-md hover:shadow-xl transition-all duration-300">

                            <Avatar variant="default" img={work.icon} />

                            <div className="w-full flex flex-col">
                                <Text variant="default">{work.name}</Text>
                                <Text variant="small">{work.role}</Text>
                                <div className="md:hidden flex w-full items-center justify-start">
                                    <Text variant="small">{work.date}</Text>
                                </div>
                            </div>

                            <div className="md:flex w-full items-center justify-end hidden">
                                <Text variant="small">{work.date}</Text>
                            </div>

                        </div>)
                }

            </div>

        </div>
    )
}