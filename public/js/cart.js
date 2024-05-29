let minus = document.querySelectorAll("#minus")
let number = document.querySelectorAll("#number")
let plus = document.querySelectorAll("#plus")
let cost = document.querySelectorAll("#cost")

minus.addEventListener('click' , function(){
    number.innerText = Number(number.innerText) -1
})
plus.addEventListener('click' , function(){
    number.innerText = Number(number.innerText) +1

})