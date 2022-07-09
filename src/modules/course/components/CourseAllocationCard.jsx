import DaysParse from "../../../utils/DaysParse"
import HoursParse from "../../../utils/HoursParse"

export default function ({ day, start, end, teacher: { name }, course: { name: nameCourse } }) {
    return (
        <div className="border pa-10px border-radius mb-10px item-color">
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
    )
}