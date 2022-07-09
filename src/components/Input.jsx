export default function (props) {
    return (
        <input ref={props.innerRef}
            id={props.name}
            className={`input ${props.customClass}`}
            placeholder={props.placeholder}
            {...(props.maxlength && { maxLength: props.maxlength })}
        />
    )
}