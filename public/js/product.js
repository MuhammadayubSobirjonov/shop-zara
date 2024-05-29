let resMenu = document.querySelector('#responsive-menu')
let hamMenu = document.querySelector('#hamburger-menu')
let closeMenu = document.querySelector('#close-menu')

hamMenu.addEventListener('click', function () {
  resMenu.classList.add("right-0")
  resMenu.classList.remove("-right-full")
})

closeMenu.addEventListener('click', function () {
  resMenu.classList.add("-right-full")
  resMenu.classList.remove("right-0")
})

let top1 = document.querySelectorAll("#top")
let flex = document.querySelectorAll("#flexx")

top1.forEach(function (item, index) {
  item.addEventListener('click', function () {
    flex[index].classList.toggle('block')
    flex[index].classList.toggle("hidden")
  })
})

let openR = document.querySelector("#open_range")
let inp = document.querySelector("#inp")

openR.forEach(function (item, index) {
  item.addEventListener('click', function () {
    inp.classList.toggle('active2')
  })
})
// let color = document.querySelector("#color1")

// let array = ["fe"]

// let color2 = document.querySelector("#color2")
// let color3 = document.querySelector("#color3")
// let color4 = document.querySelector("#color4")
// let color5 = document.querySelector("#color5")
// let color6 = document.querySelector("#color6")
// let color7 = document.querySelector("#color7")
// let color8 = document.querySelector("#color8")
// let color9 = document.querySelector("#color9")
// let color10 = document.querySelector("#color10")
// let color11 = document.querySelector("#color11")
// let color12 = document.querySelector("#color12")

// color1.addEventListener('click' , function(){
//   color1.classList.remove("bg-[#8434E1]")
//   color1.classList.add("bg-[white]")
//   color1.classList.add("border-2")
//   color1.classList.add("border-[#8434E1]")
// })

// color2.addEventListener('click' , function(){
//     color2.classList.remove("bg-black")
//     color2.classList.add("bg-[white]")
//     color2.classList.add("border-2")
//     color2.classList.add("border-black")
// })

// color3.addEventListener('click' , function(){
//     color3.classList.remove("bg-[#F35528]")
//     color3.classList.add("bg-white")
//     color3.classList.add("border-2")
//     color3.classList.add("border-[#F35528]")
// })

// color4.addEventListener('click' , function(){
//     color4.classList.remove("bg-[#F16F2B]")
//     color4.classList.add("bg-white")
//     color4.classList.add("border-2")
//     color4.classList.add("border-[#F16F2B]")
// })

// color5.addEventListener('click' , function(){
//     color5.classList.remove("bg-[#345EFF]")
//     color5.classList.add("bg-white")
//     color5.classList.add("border-2")
//     color5.classList.add("border-[#345EFF]")
// })


// color6.addEventListener('click' , function(){
//     color6.classList.remove("bg-white")
//     color6.classList.add("bg-grey")
//     color6.classList.add("border-2")
//     color6.classList.add("border-white")
// })

// color7.addEventListener('click' , function(){
//     color7.classList.remove("bg-[#D67E3B]")
//     color7.classList.add("bg-white")
//     color7.classList.add("border-2")
//     color7.classList.add("border-[#D67E3B]")
// })

// color8.addEventListener('click' , function(){
//     color8.classList.remove("bg-[#48BC4E]")
//     color8.classList.add("bg-white")
//     color8.classList.add("border-2")
//     color8.classList.add("border-[#48BC4E]")
// })

// color9.addEventListener('click' , function(){
//     color9.classList.remove("bg-[#FDC761]")
//     color9.classList.add("bg-white")
//     color9.classList.add("border-2")
//     color9.classList.add("border-[#FDC761]")
// })
// color10.addEventListener('click' , function(){
//     color10.classList.remove("bg-[#E4E5E8]")
//     color10.classList.add("bg-white")
//     color10.classList.add("border-2")
//     color10.classList.add("border-[#E4E5E8]")
// })
// color11.addEventListener('click' , function(){
//     color11.classList.remove("bg-[#E08D9D]")
//     color11.classList.add("bg-white")
//     color11.classList.add("border-2")
//     color11.classList.add("border-[#E08D9D]")
// })
// color12.addEventListener('click' , function(){
//     color12.classList.remove("bg-[#3FDEFF]")
//     color12.classList.add("bg-white")
//     color12.classList.add("border-2")
//     color12.classList.add("border-[#3FDEFF]")
// })