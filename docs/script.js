const imagenElemento = document.getElementById('carrusel-imagen');
const imagenes = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpeg'
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