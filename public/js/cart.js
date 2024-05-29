let minus = document.querySelectorAll("#minus")
let numberr = document.querySelectorAll("#number")
let plus = document.querySelectorAll("#plus")
let cost = document.querySelectorAll("#cost")

minus.forEach(function (item, index) {
    item.addEventListener('click', function () {
        numberr[index].innerText = Number(numberr[index].innerText) - 1
        cost[index].innerText = Number(cost[index].innerText) - 29
    })
})



plus.forEach(function (item, index) {
    item.addEventListener('click', function () {
        numberr[index].innerHTML = Number(numberr[index].innerHTML) + 1
        cost[index].innerHTML = Number(cost[index].innerHTML) + 29
    })
})

let del = document.querySelectorAll("#del")
let cart = document.querySelectorAll("#cart")

del.forEach(function(item , index){
    item.addEventListener('click' , function(){
        cart[index].style.display = 'none'
    })
})