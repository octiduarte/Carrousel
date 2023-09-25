const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
let actualImagen = 0;

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const sliderImage = document.getElementById("sliderImage");

btnAnterior.addEventListener("click", () => {
    actualImagen = (actualImagen - 1 + images.length) % images.length;
    updateImage();
});

btnSiguiente.addEventListener("click", () => {
    actualImagen = (actualImagen + 1) % images.length;
    updateImage();
});

function updateImage() {
    const imageUrl = images[actualImagen];
    sliderImage.src = imageUrl;
}

updateImage();
