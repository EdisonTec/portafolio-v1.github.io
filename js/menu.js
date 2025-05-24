//creando una constante y tomando la clase hamburguer es decir el icono del menu 
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu__navegacion');

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread");
});

//creando un evento con window

window.addEventListener('click',e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread");
    }
});