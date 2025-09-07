//obtener datos
const subir= document.getElementById("submit");
const img= document.getElementById("imagen");
const container= document.getElementById("container");
const end_container= document.getElementById("container_2");
const msg= document.getElementById("msg");

//funciones
function msg_moviendo(){
    msg.textContent="Moviendo";
}
function mover_elemento(){
    end_container.appendChild(img); 
    msg.textContent="";       
}
function reset(){
    container.appendChild(img);
    msg.textContent="";
}
function comenzar(){
    img.addEventListener("dragstart",msg_moviendo,false);

    
    end_container.addEventListener("dragover",function(e){
        e.preventDefault();
    }, false)

    end_container.addEventListener("drop",mover_elemento,false)

    
    container.addEventListener("dragover",function(e){
        e.preventDefault();
    },false);
    container.addEventListener("drop",reset,false)


}

//asignar eventos
window.addEventListener("load",comenzar,false);


