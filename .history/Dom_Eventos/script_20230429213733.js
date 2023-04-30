const MOSTRAR = document.getElementById("enviar")
const CONTENEDOR = document.querySelector("#container")

MOSTRAR.addEventListener('click', ()=>{
    CONTENEDOR.innerHTML = '<h1>Titulo incertado desde un script</h1>';
})
