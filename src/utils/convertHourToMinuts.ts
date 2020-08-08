export default function convertHourToMinutes(time: string) {

    // map para converter o retorno de string para number
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}