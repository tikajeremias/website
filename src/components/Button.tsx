import './button.sass';
export default function Button(props: { text: string; variant: string }) {
    return (
        // variant = 'black' | 'white' | 'ghost'
        // text = '../data/Data.tsx'
        <button className={props.variant}>{props.text}</button>
    )
};
