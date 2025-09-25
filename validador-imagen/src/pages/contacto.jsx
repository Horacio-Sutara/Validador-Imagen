import {useRef} from "react";

export default function App() {
  const form= useRef();


  function enviar_email(e){
    e.preventDefault();
    form.current.reset();


  }

  return (
    <>
    <div className="contacto">
      <h1>
          Contacto
      </h1>
      <form className="form" ref={form} onSubmit={enviar_email}>
        <label className="form_titulo">Nombre: </label>
        <input className="form_contenido" type="text"  required />
        
        <label className="form_titulo">Email: </label>
        <input className="form_contenido" type="email"  required />

        <label className="form_titulo">Mensaje: </label>
        <textarea className="form_contenido" name="message" rows="6" required></textarea>
        <input className="form_boton" type="submit" value="Enviar" />

      </form>
    </div>
    </>
  );
}
