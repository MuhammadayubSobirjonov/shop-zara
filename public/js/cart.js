let minus = document.querySelectorAll("#minus")
let number = document.querySelectorAll("#number")
let plus = document.querySelectorAll("#plus")
let cost = document.querySelectorAll("#cost")

minus.forEach(function (item, index) {
    item.addEventListener('click', function () {
        number.innerText = Number(number.innerText) - 1
    })
})
minus.forEach(function (item, index) {
    plus.addEventListener('click', function () {
        number.innerText = Number(number.innerText) + 1
    })
})