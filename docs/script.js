const imagenElemento = document.getElementById('carrusel-imagen');
const imagenes = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpeg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen7.jpg',
    'imagen8.jpg',

];
let indiceActual = 0;
function cambiarImagen() {
    imagenElemento.style.opacity = 0;
    setTimeout(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenElemento.src = imagenes[indiceActual];
        imagenElemento.style.opacity = 1;
    }, 500);
}
setInterval(cambiarImagen, 3000);
