// Импортируем функцию
import { getPercents } from "./index"

// Создаем unit-тесты для нашей функции
describe("tests for reverseString function", () => {
    // Тесты на нормальные значения
    it("should return 30 percent of 200", () => {
        expect(getPercents(30, 200)).toBe(60)
    })
    it("should return 5 percent of 123", () => {
        expect(getPercents(5, 123)).toBe(6.15)
    })

    // Тесты при неверно введенных данных
    it("should return invalid data with percent not a number", () => {
        expect(getPercents("", 20)).toBe("Данные неверны")
    })
    it("should return invalid data with number not a number", () => {
        expect(getPercents(true, "20")).toBe("Данные неверны")
    })
    it("should return invalid data with number and percent not a number", () => {
        expect(getPercents("100", false)).toBe("Данные неверны")
    })
})