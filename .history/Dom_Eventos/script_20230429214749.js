//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.
const MOSTRAR = document.getElementById("enviar")
const CONTENEDOR = document.querySelector("#container")

MOSTRAR.addEventListener('click', ()=>{
    CONTENEDOR.innerHTML = '<h1>Titulo incertado desde un script</h1>';
})
//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

CONTENEDOR.addEventListener('mouseover', ()=>{
    CONTENEDOR.style.backgroundColor = 'red';
})

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.
CONTENEDOR.addEventListener('keyup', ()=>{
    CONTENEDOR.style.width = '50%';
})