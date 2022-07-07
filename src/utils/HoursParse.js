export default function (hour) {

    const [hourSplit, zone] = hour.split("+")

    return hourSplit
}