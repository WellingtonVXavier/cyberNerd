// document.getElementById("perfil").addEventListener("mouseover", () => {
//     document.getElementById("list-perfil").style.display = "block";
// });

// document.getElementById("perfil").addEventListener("mouseout", () => {
//     document.getElementById("list-perfil").style.display = "none";
// });

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
