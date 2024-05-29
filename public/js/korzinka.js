let sizeShop = document.querySelectorAll("#size-shop")

sizeShop.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sizeShop.forEach(function (item, index) {
            sizeShop.classList.remove("size_active")
        })
        sizeShop.classList.add("size_active")
    })
})