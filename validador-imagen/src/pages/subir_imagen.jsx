import { useState } from "react";
import sprite from '../assets/sprite.svg';
export default function App() {
  const [contenido, setContenido] = useState(null);
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

      <section className="flex justify-center">
        <div
          className="flex flex-col justify-center items-center w-xl h-40 border-dashed border-4 border-[#9adcb9] gap-2 p-2 bg-gray-100"
          onDragOver={desactivar_drag}
          onDrop={mover_elemento}
        >
          <svg className="size-15 rounded-full p-2  bg-[#5ac7aa]/40">
            <use href={`${sprite}#upload`} />
          </svg>
          <input
            type="file"
            name="archivo"
            id="archivo"
            hidden
            onChange={procesar}
          />
          <label htmlFor="archivo" className="bg-white  rounded-2xl text-black p-2 hover:bg-[#5ac7aa] hover:text-white shadow-2xs">
            Selecciona tu imagen
          </label>
          <p className="font-bold">O arrastra la imagen a esta zona</p>
        </div>
      </section>

      <div className=" flex justify-center items-center m-10">
        {contenido && (<img src={contenido} width="30%" className="" alt="Vista previa" />) /* Renderizar solo si hay contenido */}
      </div>
    </>
  );
}
