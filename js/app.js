// let title = document.getElementsByClassName('slide-card-title');
// console.log(title[2].innerHTML)
// let card = document.getElementsByClassName('slide-card');
// console.log(card[2])
// let img = document.getElementsByClassName('card-img');
// console.log(img[2])
// let price = document.getElementsByClassName('card-price');
// console.log(price[2].innerHTML)

// ------------hw29
// let title = document.getElementsByClassName('slide-card-title');
// for (let text of title) {
//     console.log(text.innerHTML)    //Заголовок
// }

let addBtns = document.getElementsByClassName('shop')
// let card = document.getElementsByClassName('slide-card')
// let title = document.getElementsByClassName('slide-card-title')
// let price = document.getElementsByClassName('card-price')
// let img = document.getElementsByClassName('card-img')

let addShop = () => {
    let title = this.parentNode.querySelector('.slide-card-title');
    console.log(title)
}
// let addCard = () => {
//     console.log(title[0])

// }
for (let i = 0; i < addBtns.length; i++) {
    addBtns[1].addEventListener('click', addShop, false);
    // card[0].addEventListener('click', addCard, false)
}


