let addToCard = document.querySelector('.add-to-card');
console.log(addToCard)
let addTo = () => {
    let title = this.parentNode.parentNode.parentNode.querySelectorAll('.main-card-title')
    let price = this.parentNode.parentNode.parentNode.querySelectorAll('.price span')
    let image = this.parentNode.parentNode.parentNode.querySelectorAll('.main-card-img img')

    console.log(title[0].innerText);
    console.log(price[0].innerText);
    console.log(image[0].src);
}

for (let i = 0; i < addToCard.clientHeight; i++) {
    addToCard[i].addEventListener('click', addTo, false);
}