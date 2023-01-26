//Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky",window.scrollY > 0);
})


//configuracion para la barra navegacion  en pantallas pequeñas
let menu = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//mejorar el scroll con la barra de navegacion
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
/* scroll reveal */
const sr = ScrollReveal ({
    distance: "25px",
    duration: 2500,
    reset: true

})

sr.reveal(".home-text",{delay:190, origin: "bottom"})
sr.reveal(".about,.services,.portfolio,.contact",{delay:190, origin: "bottom"})