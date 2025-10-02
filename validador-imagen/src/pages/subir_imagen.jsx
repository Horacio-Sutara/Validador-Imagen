import { useState } from "react";

export default function App() {
  const [contenido, setContenido] = useState(null);
  const [class_imagen, setClass_imagen] = useState("imagen");
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
    lector.onload = setear_imagen;
    lector.readAsDataURL(mi_archivo);
  }

  function setear_imagen(ev){
    setContenido(ev.target.result);
    setClass_imagen("imagen visible");
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
    reader.onload = setear_imagen;
    reader.readAsDataURL(file);
  }

  return (
    <>
      <h1 className="min-w-full flex justify-center items-center p-3 text-5xl font-bold">Sube tu imagen</h1>
      <h2 id="msg" className="min-w-full text-3xl font-bold flex items-center justify-center p-3">{mensaje}</h2>

      <div
        className="border flex justify-center items-center"
        onDragOver={desactivar_drag}
        onDrop={mover_elemento}
      >
        <input
          type="file"
          name="archivo"
          id="archivo"
          hidden
          onChange={procesar}
        />
        <label htmlFor="archivo" className="bg-[#5ac7aa] border rounded-2xl text-white">
          📂 Selecciona tu imagen
        </label>
        <p>O arrastra la imagen aquí</p>
      </div>

      <div className="preview-area">
        {contenido && (<contieimg src={contenido} alt="Vista previa" className={class_imagen} />) /* Renderizar solo si hay contenido */}
      </div>
    </>
  );
}
