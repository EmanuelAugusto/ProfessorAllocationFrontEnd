import { useState, useEffect } from "react"

export default function ({ state, children, onShow, onClose, customClass }) {
    const [stateModal, setStateModal] = useState(state)

    useEffect(() => {
        if (state !== stateModal) {
            setStateModal(state);
            if (state && onShow) {
                onShow()
            }

            if (!state && onClose) {
                onClose()
            }
        }
    }, [state]);

    return (
        <dialog open={stateModal} className={customClass}>{children}</dialog>
    )
}