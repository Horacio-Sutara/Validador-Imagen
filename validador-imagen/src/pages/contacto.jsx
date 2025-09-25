import {useRef,useState} from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const form= useRef();
  const [btn_class, setBtn_class] = useState("form_boton");
  const [btm_status, btn_setStatus] = useState("Enviar");
  function enviar_email(e){
    e.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_vddcqml';
    const publicKey = 'xvh_8LYYeheP-V-j6';
    btn_setStatus(' Enviando...');
    setBtn_class("form_boton enviando");
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {

        btn_setStatus('Mensaje Enviado');
        setBtn_class("form_boton enviado");

      }, (err) => {
        btn_setStatus(' Error al Enviar');
        setBtn_class("form_boton error");
        alert(JSON.stringify(err));

      });

    setTimeout(reset_boton, 3000);

    form.current.reset();


  }

  function reset_boton(){
    btn_setStatus("Enviar");
    setBtn_class("form_boton");
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

        <input className={btn_class} type="submit" name="Enviar" value={btm_status} />

      </form>
    </div>
    </>
  );
}
