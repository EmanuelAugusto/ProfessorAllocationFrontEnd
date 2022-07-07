export default function(day) {

    const days = {
        MONDAY: "Segunda-feira",
        TUESDAY: "Terça-feira",
        WEDNESDAY: "Quarta-feira",
        THURSDAY: "Quinta-feira",
        FRIDAY: "Sexta-feira",
        SATURDAY: "Sábado",
        SUNDAY: "Domingo"
    }

    const dayFound = days[day]

    if(!dayFound){
        throw new Error("day_not_found")
    }

    return dayFound
}