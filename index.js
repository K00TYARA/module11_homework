// Экспортируем функцию для теста
export function getPercents(percent, number) {
    if (typeof(percent) !== "number" || typeof(number) !== "number"){
        return "Данные неверны"
    }
    return number / 100 * percent
}