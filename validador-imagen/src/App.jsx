import "./styles/styles.css"
import default_img from "./assets/Geralt.png"
import { useState } from "react";
export default function App() {
    const [contenido1, setContenido1] = useState(default_img);
    const [contenido2, setContenido2] = useState(null); // segundo contenedor vacío
    const [mensaje,setMensaje]=useState("chao ");

    function procesar(e){
        var mi_archivo = e.target.files[0];
        if (!mi_archivo){//verifica si el archivo no esta vacio
            setMensaje("");
            return;
        }
        if (!mi_archivo.type.startsWith("image/")){//verifica que el archivo no sea una imagen
            setMensaje("¡Debe ser una imagen!");
        }
        else{
            setMensaje("Nombre de imagen: "+mi_archivo.name+"\nTamaño: "+mi_archivo.size +" bytes");
            const lector = new FileReader();
            lector.readAsDataURL(mi_archivo);
            lector.onload= cargar;}
    }
    
    function cargar(e){
        let resultado= e.target.result;
        setContenido(resultado);
        //img"Vista previa";
    }

    function desactivar_drag(e){
         e.preventDefault();
         setMensaje("");
    }

    function mover_elemento(e) {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
        setMensaje("Debe ser una imagen");
        return;
        }

        setMensaje(
        `Imagen cargada: ${file.name}\nTamaño: ${file.size} bytes`
        );

        const reader = new FileReader();
        const contenedorDestino = e.currentTarget.id; // detectamos en qué contenedor se soltó

        reader.onload = (ev) => {
        const resultado = ev.target.result;

        if (contenedorDestino === "container") {
            setContenido1(resultado);
            setContenido2("");
        }
        else if (contenedorDestino === "container_2") {
            setContenido2(resultado);
            setContenido1("");
        }
        };

        reader.readAsDataURL(file);
    }


  return (
    <>
        <h1> 
            Sube tu imagen
        </h1>

        <h2 id="msg">{mensaje}
        </h2>

        <input type="file" name="archivos" id="archivo" hidden onChange={procesar} />
        <label for="archivo" class="btn">📂 Subir archivo</label>
        <h3> Suelta tu imagen en el recuadro o muevela de un lado al otro</h3>
        
        <div class ="contenedor">
            <section id="container" onDragOver={desactivar_drag} onDrop={mover_elemento} onDragEnd={desactivar_drag}>
                <img src={contenido1} id="imagen" class="imagen"></img>

            </section>
            <section id="container_2" onDragOver={desactivar_drag} onDrop={mover_elemento} onDragEnd={desactivar_drag}> 
                <img src={contenido2} id="imagen" className="imagen"></img>
            </section>
        </div>
    </>
  );
}
