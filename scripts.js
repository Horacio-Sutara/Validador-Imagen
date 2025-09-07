//obtener datos
const btn_subir= document.getElementById("submit");
const container= document.getElementById("container");
const msg= document.getElementById("msg");

//funciones
function saludar(){
    alert("holas")
}


//asignar eventos
btn_subir.addEventListener("click",saludar);
