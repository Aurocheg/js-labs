/// MARK: - Работа с переменными
// 1)
{
    const num = 3
    alert(num)
}

// 2)
{
    const a = 10
    const b = 2

    console.log(`Сумма = ${a + b}`)
    console.log(`Разность = ${a - b}`)
    console.log(`Произведение = ${a * b}`)
    console.log(`Частное = ${a / b}`)
}

// 3)
{
    const c = 15
    const d = 2

    const result = c + d
    alert(result)
}

// 4)
{
    const a = 10
    const b = 2
    const c = 5

    console.log(`Сумма = ${a + b + c}`);}

// 5)
{
    const a = 17
    const b = 10

    const c = a - b
    const d = 7

    const result = c + d
    console.log("Result =", result)}

/// MARK: - Работа со строками
// 6)
{
    const str = "Привет, мир!"
    console.log(str)
}

// 7)
{
    const str1 = "Привет, "
    const str2 = "Мир!"
    console.log(str1 + str2)
}

// 8)
{
    const name = "Ivan"
    console.log(`Привет, ${name}`)
}

// 9)
{
    const age = 17
    alert(`Мне ${age} лет`)
}

/// MARK: - Функция prompt
// 10)
{
    const name = prompt("Введите ваше имя")
    alert(`Ваше имя ${name}`)
}

// 11)
{
    const number = prompt("Введите число")
    alert(number * number)
}

/// MARK: - Обращение к символам строки
// 12)
{
    const str = "abcde"
    alert(str[0])
    alert(str[2])
    alert(str[4])
}

// 13)
{
    const num = '12345'

    alert(parseInt(num[0]) * parseInt(num[1]) * parseInt(num[2]) * parseInt(num[3]) * parseInt(num[4]))
}

/// MARK: - Практика
// 14)
{
    const secondsInHour = 60 * 60
    const secondsInDay = secondsInHour * 24
    const secondsInMonth = secondsInDay * 30

    alert(secondsInHour)
    alert(secondsInDay)
    alert(secondsInMonth)
}

// 15)
{
    const today = new Date()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()

    alert(`${hours}:${minutes}:${seconds}`)
}

// 16)
{
    const number = 5
    alert(number * number)
}

// 17)
{
    let num = 47
    num += 7
    num -= 18
    num *= 10
    num /= 15
    alert(num)
}

// 18)
{
    let num = 10
    num++
    num++
    num--
    alert(num)
}