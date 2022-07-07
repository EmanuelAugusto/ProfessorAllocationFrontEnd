import { useState, useEffect } from "react"

export default function ({ state, children, onShow, onClose }) {
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
        <dialog open={stateModal}>{children}</dialog>
    )
}