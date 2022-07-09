export default function ({ innerRef, optionLabel, optionValue, options = [], name, customClass, placeholder }) {

    const opLabel = optionLabel;
    const opValue = optionValue;


    return (

        <select ref={innerRef} id={name} className={`input ${customClass}`} placeholder={placeholder}>
            {options.map((op, key) => <option key={key} value={op[opValue]}>{op[opLabel]}</option>)}
        </select>
    )
}