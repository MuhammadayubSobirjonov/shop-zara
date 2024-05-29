let minus = document.querySelector("#minus")
let numberr = document.querySelector("#number")
let plus = document.querySelector("#plus")
let cost = document.querySelectorAll("#cost")

// minus.forEach(function (item, index) {
    minus.addEventListener('click', function () {
        numberr.innerText = Number(numberr.innerText) - 1
    })
// })
// minus.forEach(function (item, index) {
    plus.addEventListener('click', function () {
        numberr.innerText = Number(numberr.innerText) + 1
    })
// })