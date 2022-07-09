export default function ({ title, children, classCustom, slotafter }) {
    return (
        <div className={`dp-flex border space-between al-center item-color pa-10px border-radius ${classCustom}`}>
            <div>
                {title}
            </div>
            <div>
                {slotafter}
            </div>
        </div>

    )
}