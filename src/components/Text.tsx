import './text.sass';
export default function Text(props: { text: string; type: string }) {
    return (
        // type = 'small' | 'medium' | 'large'
        // text = '../data/Data.tsx'
        <p className={props.type}>{props.text}</p>
    )
};
