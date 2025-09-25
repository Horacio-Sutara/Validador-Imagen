import {useRef} from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const form= useRef();


  function enviar_email(e){
    e.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_vddcqml';
    const publicKey = 'xvh_8LYYeheP-V-j6';
    form.current.Enviar.value = 'Enviando...';
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {

        form.current.Enviar.value = ' Mensaje Enviado';
        setTimeout(reset_boton, 3000);
      }, (err) => {
        form.current.Enviar.value = 'No se pudo enviar';
        setTimeout(reset_boton, 3000);

        alert(JSON.stringify(err));

      });


    form.current.reset();


  }

  function reset_boton(){
    form.current.Enviar.value = 'Enviar';
  }

  return (
    <>
    <div className="contacto">
      <h1>
          Contacto
      </h1>
      <form className="form" ref={form} onSubmit={enviar_email}>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <label className="form_titulo">Nombre </label>
        <input className="form_contenido" type="text" name="name" required />
        
        <label className="form_titulo">Email </label>
        <input className="form_contenido" type="email"  name="email" required />

        <label className="form_titulo">Mensaje </label>
        <textarea className="form_contenido" name="message" rows="6" required></textarea>

        <input className="form_boton" type="submit" name="Enviar" value="Enviar" />

      </form>
    </div>
    </>
  );
}
