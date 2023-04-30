/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */
//Crea una variable numero y asígnale un valor de tipo number.
let numero = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let texto = "Esto es un string";

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let verdadero = true;

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false;

//Crea una variable nulo y asígnale un valor de tipo null.
let nulo = null;

//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined;

//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
let arreglo = [1, "hola", true, undefined, indefinido];

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(numero, typeof(numero));

//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(texto, "es un", typeof(texto));

//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(verdadero, "es de tipo", typeof(verdadero));

//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(falso, "es de tipo", typeof(falso));

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(nulo, "es de tipo", typeof(nulo));

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, "es de tipo", typeof(indefinido));

//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(arreglo, "Es un tipo de", typeof(arreglo));
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
let arr1 = ["Hola", "Puevlo", "Javascript", "Ciencias"];
let arr2 = ["Perro", "Cielo", "Gato"];

let c = arraylength(arr1, arr2);
console.log(c)

function arraylength(a, b){
    if (a.length > b.length){
        return a;
    } else {
        return b;
    }
}

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.

let datos = {
    nombre: "Fredy",
    apellido: "Arce",
    edad: 25,
    ciudad: "Coronel Bogado"
}
let dat = obecToArray(datos);
console.log(dat);
console.log(datos);
function obecToArray(arr){
    let array = [];

    for(let elementos in arr){
        array.push(arr[elementos]);
    }
    return array;
}

// Bucles
//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
let i = 1;
while ( i <= 5) {
    console.log(i++)
}

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

let vect = [1, 2, 3, 4, 5];
for(let resul in vect){
    console.log(vect[resul]);
}

// Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
let back = sun(10);
console.log(back);

function sun(nun){
    let sum = 0;
    for(let i = 0; i <= nun; i++ ){
        sum += i;
        console.log(sum)
    }
    return sum;
}

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.

let vector = [1,2,3,4,5,6,7,8,9,10];
let res = sumVect(vector);
console.log(res);

function sumVect(a){
    let sum = 0;
    let i = 0;
    while (i < a.length) {
        sum += a[i];
        i++;
    }

    return sum;
}