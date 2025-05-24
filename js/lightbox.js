const imagenes = document.querySelectorAll('.img__galeria');
const imagenesLight = document.querySelector('.agregar__imagen');
const contenedorlight = document.querySelector('.imagen__light');
const hamburguer1 = document.querySelector('.hamburguer');


imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
       aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorlight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburguer1.style.opacity = '1'
}
    }
);

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorlight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
     hamburguer1.style.opacity = '0'
}