alert ("¿Quieres saber tu suerte?");
let primerDado = Math.floor(Math.random() * 6) + 1;
let segundoDado = Math.floor(Math.random() * 6) + 1;
let resultado = primerDado + segundoDado
alert (`
    En el primer dado salio "${primerDado}"
    en el segundo dado salio "${segundoDado}" y 
    dando un total de "${resultado}"`)