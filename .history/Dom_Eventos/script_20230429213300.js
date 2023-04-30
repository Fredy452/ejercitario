const MOSTRAR = document.getAnimations("enviar")
const CONTENEDOR = document.querySelector("container")

MOSTRAR.addEventListener('click', ()=>{
    alert("hola")
    CONTENEDOR.innerHTML = '<h1>Titulo incertado desde un script</h1>';
})
