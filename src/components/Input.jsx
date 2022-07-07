export default function (props) {
    return (
        <input ref={props.innerRef} id={props.name} className="input" placeholder={props.placeholder} />
    )
}