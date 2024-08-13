import './icon.sass';
export default function Icon(props) {
    return(
        <{props.icon} className={props.variant}/>
    )
};
