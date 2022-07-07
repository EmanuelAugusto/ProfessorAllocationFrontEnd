import DaysParse from "../../../utils/DaysParse"
import HoursParse from "../../../utils/HoursParse"

export default function ({ day, start, end, teacher: { name } }) {
    return (
        <div className="border pa-10px">
            <p>
                Dia: {DaysParse(day)}
            </p>
            <p>
                Hora de inicio: {HoursParse(start)}
            </p>
            <p>
                Hora de termino: {HoursParse(end)}
            </p>
            <p>
                Nome do professor: {name}
            </p>
        </div>
    )
}