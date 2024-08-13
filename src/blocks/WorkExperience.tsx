import Avatar from "../components/Avatar";
import Text from "../components/Text";
import { Data } from "../data/Data";

export default function WorkExperience() {
    return (
        <div style={{ width: '100%', display: 'flex', gap: '25px', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'center' }}>
            <Text type="medium" text={Data.workExperience.title} />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                    <Avatar size="smallImage" image={Data.workExperience.esga.icon} />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Text type="medium" text={Data.workExperience.esga.name} />
                        <Text type="small" text={Data.workExperience.esga.role} />
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', alignItems:'center', justifyContent:'flex-end'}}>
                    <Text type="small" text={Data.workExperience.esga.date} />
                </div>
            </div>
        </div>
    )
}