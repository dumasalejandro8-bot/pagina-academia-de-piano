const botonDerecho = document.querySelector(".flecha-derecha");
const botonIzquierdo = document.querySelector(".flecha-izquierda");
const carrusel = document.querySelector(".carrusel");
const imagenes = document.querySelectorAll(".carrusel img");

let posicion = 0;

const movimiento = 160;
const visibles = 3;

const limite = (imagenes.length - visibles) * movimiento;


botonDerecho.addEventListener("click", function(){

    posicion += movimiento;

    if(posicion > limite){
        posicion = 0;
    }

    carrusel.style.transform = `translateX(-${posicion}px)`;

});


botonIzquierdo.addEventListener("click", function(){

    posicion -= movimiento;

    if(posicion < 0){
        posicion = limite;
    }

    carrusel.style.transform = `translateX(-${posicion}px)`;

});