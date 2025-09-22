import "./styles/styles.css";
import default_img from "./assets/Geralt.png";
import { useEffect, useState } from "react";

export default function App() {
  const [contenido, setContenido] = useState(default_img);
  const [mensaje, setMensaje] = useState("");

  // Manejo del archivo seleccionado
  function procesar(e) {
    const mi_archivo = e.target.files[0];
    if (!mi_archivo) {
      setMensaje("");
      return;
    }

    if (!mi_archivo.type.startsWith("image/")) {
      setMensaje("¡Debe ser una imagen!");
      return;
    }

    setMensaje(
      `Nombre de imagen: ${mi_archivo.name}\nTamaño: ${mi_archivo.size} bytes`
    );

    const lector = new FileReader();
    lector.readAsDataURL(mi_archivo);

    lector.onload = cargarImagen;
  }

  function cargarImagen(ev) {
    const resultado = ev.target.result;
    window.history.pushState({ img: resultado }, "", "imagen.html");
    setContenido(resultado);
  }

  // Evitar comportamiento por defecto al arrastrar
  function desactivar_drag(e) {
    e.preventDefault();
    setMensaje("");
  }

  // Manejo del arrastre de archivos
  function mover_elemento(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMensaje("Debe ser una imagen");
      return;
    }

    setMensaje(`Imagen cargada: ${file.name}\nTamaño: ${file.size} bytes`);

    const reader = new FileReader();
    reader.onload = cargarImagenArrastre;
    reader.readAsDataURL(file);
  }

  function cargarImagenArrastre(ev) {
    const resultado = ev.target.result;
    window.history.pushState({ img: resultado }, "", "imagen.html");
    setContenido(resultado);
  }

  // Restaurar imagen según historial (atrás/adelante)
  function change_image(e) {
    if (e.state && e.state.img) {
      setContenido(e.state.img);
    } else {
      setContenido(default_img);
    }
  }

  useEffect(() => {
    window.addEventListener("popstate", change_image);
    return () => window.removeEventListener("popstate", change_image);
  }, []);

  return (
    <>
        <div className="subir_imagen">
            <h1>Sube tu imagen</h1>
            <h2 id="msg">{mensaje}</h2>
            
            <input
                type="file"
                name="archivo"
                id="archivo"
                hidden
                onChange={procesar}
            />
            <label htmlFor="archivo" className="btn">
                📂 Selecciona tu imagen
            </label>
            
            <div
                className="upload-area"
                onDragOver={desactivar_drag}
                onDrop={mover_elemento}
            >
                <p>O arrastra la imagen aquí</p>
            </div>

            <div className="preview-area">
                <img src={contenido} alt="Vista previa" className="imagen" />
            </div>
        </div>

    </>
  );
}
