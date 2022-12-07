// Простые функции
// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function task1(num) {
    return num * num
}
console.log(task1(2))

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
function task2(...nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    return result
}
console.log(task2(2, 3))

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function task3(num1, num2, num3) {
    return (num1 - num2) / num3
}
console.log(task3(3, 2, 1))

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function task4(dayNumber) {
    const daysArray = [
        "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
    ]

    for (let i = 0; i < daysArray.length; i++) {
        if (dayNumber === i + 1) {
            return daysArray[i]
        }
    }
}
console.log(task4(1))

// На флаги
// 1. Дан массив с числами. Проверьте, что в этом массиве есть число 5.
// Если есть - выведите 'да', а если нет - выведите 'нет'.
function task5(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 5) {
            return "да"
        }
    }
    return "нет"
}
console.log(task5([5, 1, 2, 3, 4]))

// 2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого
// и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
// Если число не делится - выведите 'false', а если делится - выведите 'true'.
function task6(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'true'
        }
    }
    return 'false'
}
console.log(task6(31))

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
// Если есть - выведите 'да', а если нет - выведите 'нет'.
function task7(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === numberArray[i - 1]) {
            return 'да'
        }
    }
    return 'нет'
}
console.log(task7([1, 2, 3, 4, 5, 5]))