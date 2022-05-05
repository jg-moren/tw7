
//https://www.w3schools.com/howto/howto_js_slideshow.asp
let slide_index = 1;
showSlides(slide_index);

function plusSlides(n) {
    showSlides(slide_index += n);
}
function showSlides(n) {


    //pega todos os elemntos de classe "Slides" ou seja lista todos as paginas 
    var slides = document.getElementsByClassName("Slides");
    //correcao do index
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    // "desliga" todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //liga o slide
    slides[slide_index - 1].style.display = "block";

}