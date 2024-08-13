import Text from "../components/Text";
import { Data } from "../data/Data";

export default function About() {
    return (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'center'}}>
            <Text type="medium" text={Data.about.title}/>
            <Text type="small" text={Data.about.description}/>
        </div>
    )
}