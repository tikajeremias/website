import Avatar from "../components/Avatar";
import Text from "../components/Text";
import { Data } from "../data/Data";

export default function Profile() {
    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', marginTop: '101px'}}>
            <Avatar size="mediumImage" image={Data.profile.icon}/>
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'center'}}>
                <Text type="medium" text={Data.profile.title}/>
                <Text type="small" text={Data.profile.description}/>
            </div>
        </div>
    )
}
