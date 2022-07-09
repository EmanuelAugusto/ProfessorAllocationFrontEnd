import Store from '../store/store'
import { setToastState } from "../store/generalState"

export default function ({ message, color, show, time = 2000 }) {
    Store.dispatch(setToastState({
        show,
        message,
        color
    }))

    setTimeout(() => {
        Store.dispatch(setToastState({
            message: '',
            color: "",
            show: false
        }))
    }, time)
}