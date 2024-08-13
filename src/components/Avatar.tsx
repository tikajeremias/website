import './Avatar.sass';
export default function Avatar(props: { image: string; size: string }) {
    return (
        <img className={props.size} src={props.image} />
    )
};
