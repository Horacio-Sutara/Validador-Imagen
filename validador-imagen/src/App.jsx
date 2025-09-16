import "./styles/styles.css"
import default_img from "./assets/Geralt.png"
export default function App() {
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

  return (
    <>
        <h1> 
            Sube tu imagen
        </h1>

        <h2 id="msg">
        </h2>

        <label for="archivo" class="btn">📂 Subir archivo</label>
        <h3>Mueve tu imagen</h3>
        <div>

            <section id="container">
                <img src={default_img} id="imagen" class="imagen"></img>
            </section>
            <section id="container_2"> 

            </section>
            
        </div>
    </>
  );
}
