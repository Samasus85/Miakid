// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 10,

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

const mySwiper = new Swiper('swiper-slide', {

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        960: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50
        }

    },


    // Navigation arrows
    navigation: {
        nextEl: '#feat-next',
        prevEl: '#feat-prev',
    },

});