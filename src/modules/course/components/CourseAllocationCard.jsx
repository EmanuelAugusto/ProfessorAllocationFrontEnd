import Button from "../../../components/Button"
import DaysParse from "../../../utils/DaysParse"
import HoursParse from "../../../utils/HoursParse"


export default function ({ day, start, end, teacher: { name }, course: { name: nameCourse }, slotafter }) {
    return (
        <div className="border dp-flex  pa-10px border-radius mb-10px item-color space-between">
            <div>
                <p>
                    Dia: {DaysParse(day)}
                </p>
                <p>
                    Hora de inicio: {start ? HoursParse(start) : ''}
                </p>
                <p>
                    Hora de termino: {end ? HoursParse(end) : ''}
                </p>
                <p>
                    Nome do professor: {name}
                </p>
                <p>
                    Curso: {nameCourse}
                </p>
            </div>
            <div className="">
                {slotafter}
            </div>
        </div>
    )
}