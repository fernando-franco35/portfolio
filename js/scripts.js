/*const carouselTrack = document.querySelector('.carrusel');
const carouselItems = document.querySelectorAll('.scroll');
//let currentIndex = 0;

// Duplicar los elementos del carrusel para crear un efecto de bucle
carouselTrack.innerHTML += carouselTrack.innerHTML;

function moveCarousel() {
   // currentIndex++;
    
    /*if (currentIndex >= carouselItems.length) {
        currentIndex = 0;*/
        //carouselTrack.style.transition = 'none';
        //carouselTrack.style.transform = 'translateX(0)';
        /*setTimeout(() => {*/
            //carouselTrack.style.transition = 'transform 10s linear';
        /*}, 0);*/
    /*} else {*/
        //carouselTrack.style.transform = `translateX(-100%)`;
    /*}*/
/*}*/

/*setInterval(moveCarousel, 1); // Cambia de item cada 2 segundos
*/

/*clonacion de las imagenes para el carrusel*/
var copia = document.querySelector(".carrusel").cloneNode(true);
document.querySelector(".logos").appendChild(copia);