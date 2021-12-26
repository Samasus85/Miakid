
let addBtns = document.getElementsByClassName('main-card');
let addToCardPriceFunc = function () {
    let price = this.parentNode.getElementsByClassName('price')
}
for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', addToCardPriceFunc, false)
}
let addBtn = document.getElementsByClassName('add-to-card');
let addToCardFunc = function () {
    let title = this.parentNode.parentNode.getElementsByClassName('main-card-title')
}
for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', addToCardFunc, false)
}
let address = document.querySelector('.main-card');
let addToCardaddressFunc = function () {
    let title = this.getAttribute('src')
}
for (let i = 0; i < address; i++) {
    addBtn[i].addEventListener('click', addToCardaddressFunc, false)
}
