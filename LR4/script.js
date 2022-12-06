// Циклы while и for
// 1 - 4. Решите эти задачи сначала через цикл while, а затем через цикл for.

// 1. Выведите столбец чисел от 1 до 100.
{
    let i = 1
    while (i < 100) {
        console.log(i)
        i++
    }

    for (let i = 1; i < 100; i++) {
        console.log(i)
    }
}

// 2. Выведите столбец чисел от 11 до 33.
{
    let i = 11
    while (i < 33) {
        console.log(i)
        i++
    }

    for (let i = 11; i < 33; i++) {
        console.log(i)
    }
}

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.
{
    let i = 0
    while (i < 100) {
        if (i % 2 === 0) {
            console.log(i)
        }
        i++
    }

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// 4. С помощью цикла найдите сумму чисел от 1 до 100.
{
    let i = 1
    let sum1 = 0
    while (i < 100) {
        sum1 += i
        i++
    }
    console.log(sum1)

    let sum2 = 0
    for (let i = 0; i < 100; i++) {
        sum2 += i
    }
    console.log(sum2)
}

// Работа с for для массивов
// 5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
{
    const array = [1, 2, 3, 4, 5]

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// 6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
{
    const array = [1, 2, 3, 4, 5]
    let result = 0

    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    console.log(result)
}

// Работа с for-in
// 7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
{
    const obj = {
        green: 'зеленый', red: 'красный', blue: 'голубой'
    }

    for (let key in obj) {
        console.log(key)
        console.log(obj[key])
    }
}

// 8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
{
    const obj = {
        kolya: "200",
        vasya: "300",
        petya: "400"
    }

    for (let key in obj) {
        console.log(`${key} - зарплата ${obj[key]} долларов`)
    }
}

// Задачи
// 9. Дан массив с элементами 2, 5, 9, 15, 0, 4.
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
{
    const array = [2, 5, 9, 15, 0, 4]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 3 && array[i] < 10) {
            console.log(array[i])
        }
    }
}

// 10. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
{
    const array = [-2, -5, 9, -15, 0, 4]
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result += array[i]
        }
    }
    console.log(result)
}

// 11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10.
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
{
    const array = [1, 2, 5, 9, 4, 13, 4, 10]

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 4) {
            console.log("Есть!")
            break
        }
    }
}

// 12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
{
    const array = [10, 20, 30, 50, 235, 3000]

    for (let i = 0; i < array.length; i++) {
        let currentElem = array[i].toString()
        if (currentElem[0] == 1 || currentElem[0] == 2 || currentElem[0] == 5){
            console.log(currentElem)
        }
    }
}

// 13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let str = "-"

    for (let i = 0; i < array.length; i++) {
        str += array[i] + "-"
    }
    console.log(str)
}

// 14. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
// а выходные дни выведите жирным.
{
    const array = [
        "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота", "Воскресенье"
    ]

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
        div.textContent = array[i]

        if (i > 4) {
            div.style.fontFamily = "bold"
        }

        document.body.appendChild(div)
    }
}

// 15. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
// а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
{
    const array = [
        "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота", "Воскресенье"
    ]
    const currentDay = new Date().getDay()

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
        div.textContent = array[i]

        if (i === currentDay) {
            div.style.fontFamily = "cursive"
        }

        document.body.appendChild(div)
    }
}

// 16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.
{
    let n = 1000
    let num = 0
    while (n > 50) {
        n /= 50
        num++
    }
    console.log(n)
    console.log(num)
}