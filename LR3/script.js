// 1)
{
    const a = 1

    if (a === 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 2)
{
    const a = 1

    if (a > 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 3)
{
    const a = -3

    if (a < 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 4)
{
    const a = 1

    if (a >= 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 5)
{
    const a = -1

    if (a <= 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 6)
{
    const a = -1

    if (a !== 0) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 7)
{
    const a = "test"

    if (a === "test") {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 8)
{
    const a = "1"

    if (a === "1") {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 9)
{
    const test = true

    test ? alert("Верно") : alert("Неверно")

    if (test) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 10)
{
    const test = false

    !test ? alert("Верно") : alert("Неверно")

    if (!test) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 11)
{
    const a = 5

    if (a > 0 && a < 5) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 12)
{
    let a = 5

    if (a === 0 || a === 2) {
        a += 7
    } else {
        a /= 10
    }

    alert(a)
}

// 13)
{
    const a = 1
    const b = 3

    if (a <= 1 && b >= 3) {
        alert(a + b)
    } else {
        alert(a - b)
    }
}

// 14)
{
    const a = 1
    const b = 3

    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        alert("Верно")
    } else {
        alert("Неверно")
    }
}

// 15)
{
    const num = 1
    let result

    switch (num) {
        case 1:
            result = "зима"
            break
        case 2:
            result = "весна"
            break
        case 3:
            result = "лето"
            break
        case 4:
            result = "осень"
            break
        default:
            break
    }

    alert(result)
}

// 16)
{
    const day = 20

    if (day > 0 && day < 11) {
        alert("Первая декада")
    } else if (day > 10 && day < 21) {
        alert("Вторая декада")
    } else if (day > 20 && day <= 31) {
        alert("Третья декада")
    } else {
        alert("Введите корректное число")
    }
}

// 17)
{
    const month = 3

    if (month > 0 && month < 4 || month === 12) {
        alert("зима")
    } else if (month > 3 && month < 6) {
        alert("весна")
    } else if (month > 5 && month < 9) {
        alert("лето")
    } else if (month > 8 && month < 12) {
        alert("осень")
    } else {
        alert("Введите корректное число")
    }
}

// 18)
{
    const str = "abcde"

    if (str[0] === "a") {
        alert("да")
    } else {
        alert("нет")
    }
}

// 19)
{
    const numbersString = "12345"

    if (numbersString[0] === "1" || numbersString[0] === "2" || numbersString[0] === "3") {
        alert("да")
    } else {
        alert("нет")
    }
}

// 20)
{
    let numbersString = "123"

    alert(parseInt(numbersString[0]) + parseInt(numbersString[1]) + parseInt(numbersString[2]))
}

// 21)
{
    let numbersString = "123456"
    numbersString = parseInt(numbersString)

    const firstSum = parseInt(numbersString[0]) + parseInt(numbersString[1]) + parseInt(numbersString[2])
    const secondSum = parseInt(numbersString[3]) + parseInt(numbersString[4]) + parseInt(numbersString[5])

    if (firstSum === secondSum) {
        alert("да")
    } else {
        alert("нет")
    }
}