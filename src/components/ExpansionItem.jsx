export default function ({ title, children, classCustom, slotafter }) {
    return (
        <details className={`item-color border pa-10px border-radius ${classCustom}`}>
            <summary className="dp-flex space-between al-center">
                <div>
                    {title}
                </div>
                <div>
                    {slotafter}
                </div>
            </summary>
            <section className="pa-10px">
                {children}
            </section>
        </details>
    )
}