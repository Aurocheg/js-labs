// 1)
{
    const arr = ["a", "b", "c"]
    alert(arr)
}

// 2)
{
    const arr = ["a", "b", "c"]
    alert(arr[0])
    alert(arr[1])
    alert(arr[2])
}

// 3)
{
    const arr = ["a", "b", "c", "d", "e"]

    alert(`${arr[0] + arr[1]}, ${arr[2] + arr[3]}`)
}

// 4)
{
    const arr = [2, 5, 3, 9]

    const firstResult = arr[0] * arr[1]
    const secondResult = arr[2] * arr[3]
    const result = firstResult + secondResult
    alert(result)
}

// 5)
{
    const obj = {
        a: 1, b: 2, c: 3
    }

    alert(obj["b"])
    alert(obj.b)
}

// 6)
{
    const obj = {
        kolya: "1000", vasya: "500", petya: "200"
    }

    alert(obj.petya)
    alert(obj.kolya)
}

// 7), 8)
{
    const obj = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }

    alert(obj[2])

    const day = 3
    alert(obj[day])
}

// 9)
{
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    alert(arr[1][0])
}

// 10)
{
    const obj = {
        js: ["jQuery", "Angular"],
        php: "hello",
        css: "world"
    }

    alert(obj.js[0])
}
// 11), 12)
{
    const arr = {
        "ru": [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье"
        ],
        "en": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
    }

    alert(arr.ru[0])
    alert(arr.en[2])

    const lang = "en"
    const day = 5

    if (lang === "en") {
        alert(arr.en[day - 1])
    } else if (lang === "ru") {
        alert(arr.ru[day - 1])
    } else {
        alert("Такой язык не поддерживается")
    }

}