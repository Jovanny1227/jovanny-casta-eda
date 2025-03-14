alert ("Bienvenido a la calculadora de edad");
alert ("Aqui podras averiguar que edad tendrias en algunos años");
let usuario = prompt("¿Como te llamas?");
let edadActual = parseInt(prompt("ingresa tu edad actual"));
let añosFuturos = parseInt(prompt("ingresa los años que quieres saber"));
let añosTotal = edadActual + añosFuturos;
alert (`Hola ${usuario} en ${añosFuturos} años tendras ${añosTotal} años de edad`);