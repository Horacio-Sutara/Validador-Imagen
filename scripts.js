//obtener datos
const archivo= document.getElementById("archivo");
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
}

function reset(){
    container.appendChild(img);
}

function procesar(e){
    var mi_archivo = e.target.files[0];
    if (!mi_archivo){//verifica si el archivo no esta vacio
        msg.textContent="";
        return;
    }
    if (!mi_archivo.type.startsWith("image/")){//verifica que el archivo no sea una imagen
        msg.textContent="¡Debe ser una imagen!"
    }
    else{
    msg.textContent="Nombre de imagen: "+mi_archivo.name+"\nTamaño: "+mi_archivo.size +" bytes";
    const lector = new FileReader();
    lector.readAsDataURL(mi_archivo);
    lector.onload= cargar;}
    
}

//carga la imagen en el contenedor 
function cargar(e){
    let resultado= e.target.result;
    img.src=resultado;
    img.alt="Vista previa";
}

//API Drag and Drop

img.addEventListener("dragstart",msg_moviendo,false);

//mover a end container
end_container.addEventListener("dragover",function(e){
    e.preventDefault();
}, false)

end_container.addEventListener("drop",mover_elemento,false)

//mover a conteiner
container.addEventListener("dragover",function(e){
    e.preventDefault();
},false);
container.addEventListener("drop",reset,false);

//borrar texto de mover
container.addEventListener("dragend",function(e){
    e.preventDefault();
    msg.textContent="";
},false);

end_container.addEventListener("dragend",function(e){
    e.preventDefault();
    msg.textContent="";
},false);

//Archivo
archivo.addEventListener("change",procesar,false);

