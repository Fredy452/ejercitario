/*Decisiones en javascript (if,if else, switch)*/
//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let numnero = function(n){
    if (n > 10) {
        console.log(n, "Es mayor que 10");
    }else if (n < 10){
        console.log(n, "Es menor que 10");
    }else{
        console.log(n, "Es igual a 10");
    }
}
//numnero(10);

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let parNumber = function(n){
    if (n % 2 == 0) {
        console.log(n, "Es un numero par");
    } else {
        console.log(n, "Es unnumero impar");
    }
}
//parNumber(7);

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let verificar = function(l){
    const VOCAL = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (VOCAL.includes(l)){
        console.log("Ingresaste una vocal");
    }else{
        console.log("Ingresaste una consonante");
    }
}
verificar("b")
//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let mayor = function(n){
    if (n >= 18) {
        console.log("Usted es mayor de edad");
    } else {
        console.log("Usted es menor de edad");
    }
}

mayor(23);
//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let dia = function(d){
    week = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

    switch (d) {
        case 1:
            console.log("La opción es lunes")
            break;
        case 2:
            console.log("La opción es martes")
            break;
        case 3:
                console.log("La opción es miercoles")
                break;
        case 4:
            console.log("La opción es jueves")
            break;
        case 5:
            console.log("La opción es viernes")
            break;
        case 6:
                console.log("La opción es sabado")
                break;
        case 7:
            console.log("La opción es domingo")
            break;    
    
        default:
            console.log("Ingrese un numero del 1 al 7")
            break;
    }
}
dia(7);

//Funciones
//Escribe una función que tome dos números como argumentos y devuelva su suma
function suma(a, b){
    let resul = a+b;
    return resul;
}

let mostrar = suma(4,6);
console.log(mostrar);
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar

function par(n){
    if (n % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

let result = par(6);
console.log(result);
//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function smArray(a){
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
       sum += a[i]; 
    }
    return sum;
}
const a = [1, 2, 4, 7, 9];
let show = smArray(a);
console.log(show)

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
