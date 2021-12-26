let addToCard = document.querySelector('.add-to-card');
let addTo = () => {
    let title = this.parentNode.parentNode.parentNode.querySelectorAll('.main-card-title')
    let price = this.parentNode.parentNode.parentNode.querySelectorAll('.price span')
    let image = this.parentNode.parentNode.parentNode.querySelectorAll('.main-card-img img')
}
for (let i = 0; i < addToCard.clientHeight; i++) {
    addToCard[i].addEventListener('click', addTo, false);
}
