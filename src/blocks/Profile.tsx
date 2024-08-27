import Text from "../components/Text";
import { Data } from "../data/Data";
import Avatar from "../components/Avatar";

export default function Profile() {
    return (
        <div className="flex gap-4 md:flex-row md:text-start flex-col items-center text-center mt-[70px]">
            <Avatar variant="large" img={Data.profile.icon} />
            <div className="flex flex-wrap flex-col items-center md:items-start justify-center ">
                <Text variant="default">{Data.profile.title}</Text>
                <Text variant="small">{Data.profile.description}</Text>
            </div>
        </div>
    )
}
