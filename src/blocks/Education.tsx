import Avatar from "../components/Avatar";
import Text from "../components/Text";
import { Data } from "../data/Data";

export default function Education() {

    const Education = Data.education.education

    return (
        <div className="w-full flex gap-2 flex-col flex-wrap items-start justify-center">

            <Text variant="default">{Data.education.title}</Text>

            <div className="w-full flex flex-col gap-2">

                {
                    Education.map((edu, index) =>
                        <div key={index} className="w-full p-4 rounded-lg flex justify-center items-center flex-row gap-2 shadow-md hover:shadow-xl transition-all duration-300">

                            <Avatar variant="default" img={edu.icon} />

                            <div className="w-full flex flex-col">
                                <Text variant="default">{edu.title}</Text>
                                <Text variant="small">{edu.where}</Text>
                                <div className="md:hidden flex w-full items-center justify-start">
                                    <Text variant="small">{edu.date}</Text>
                                </div>
                            </div>

                            <div className="md:flex w-full items-center justify-end hidden">
                                <div className="w-full flex items-center justify-end">
                                    <Text variant="small">{edu.date}</Text>
                                </div>
                            </div>

                        </div>)
                }

            </div>

        </div>
    )
}