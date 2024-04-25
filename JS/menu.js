let btnMenu = document.getElementById( 'btn-menu' );
let menu = document.getElementById( 'menu-mob' );
let overlay = document.getElementById('overlay-menu');
/*let fechaMenu = document.getElementById( "fecha" );*/

btnMenu.addEventListener( "click", ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener( "click", ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener( "click", ()=>{
    menu.classList.remove('abrir-menu')
})
/*
fechaMenu.addEventListener("click",()=>{
    menu.classList.remove('fecha-menu','abrir-menu');
});*/

