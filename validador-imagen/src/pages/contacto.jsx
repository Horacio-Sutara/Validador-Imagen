import {useRef,useState} from "react";
import emailjs from "@emailjs/browser";
import sprite from '../assets/sprite.svg';
import Modal from "../components/Modal";

export default function App() {
  const form= useRef();

  const [btn_class, setBtn_class] = useState("bg-[#5ac7aa]");
  const [btm_status, btn_setStatus] = useState("Enviar");
  
  //Configuracion del modal
  const [openModal, setopenModal]= useState(false);
  const [iconModal, seticonModal]=useState("");
  const [mensajeModal, setmensajeModal]= useState("");
  const [descripcionModal, setdescripcionModal]= useState("");


  const baseStyles = `min-w-full col-start-1 col-end-3 border border-[#9adcb9] rounded-xl cursor-pointer text-white py-2 font-bold ${btn_class}`;

  function enviar_email(e){
    e.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_vddcqml';
    const publicKey = 'xvh_8LYYeheP-V-j6';
    btn_setStatus(' Enviando...');
    setBtn_class("bg-amber-400");
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {

        btn_setStatus('Mensaje Enviado');

        seticonModal("verified")
        setmensajeModal("¡Mensaje Enviado!")
        setdescripcionModal("Se ha enviado correctamente el mensaje. Nos pondremos en contacto en breve.")
        setopenModal(true);
        
        setBtn_class("bg-blue-400");


      }, (err) => {
        btn_setStatus(' Error al Enviar');
        setBtn_class("bg-red-600");
        
        seticonModal("error");  
        setmensajeModal("¡Se ha producido un error!");
        setdescripcionModal("No se ha podido enviar el mensaje. Lo sentimos");
        setopenModal(true);

      });

    setTimeout(reset_boton, 3000);

    form.current.reset();


  }

  function reset_boton(){
    btn_setStatus("Enviar");
    setBtn_class("bg-[#5ac7aa]");
  }

  return (
    <>
      <Modal mensaje={mensajeModal} descripcion={descripcionModal} icon={iconModal} isOpen={openModal} cerrar={()=> {setopenModal(false) }} />
      <h1 className="min-w-full flex justify-center text-5xl font-bold p-3">
          Contacto
      </h1>
      <section className="flex min-w-full justify-center py-6">
        <form className="grid grid-cols-2  gap-2 min-w-xl 
        bg-white border rounded-2xl border-[#9adcb9]
        py-10 px-10" 
        ref={form} onSubmit={enviar_email}>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <label className="font-bold flex items-center">
            <svg className="size-6  text-[#5ac7aa]">
              <use href={`${sprite}#person`} />
            </svg>
            Nombre 
          </label>
          <label className="font-bold flex items-center">
            <svg className="size-6  text-emerald-600">
              <use href={`${sprite}#email`} />
            </svg>
            Email 
          </label>
          <input className="min-w-full  min-h-full border border-[#9adcb9] rounded-xl p-2 focus:outline-none focus:border-4" type="text" name="name"  placeholder="Horacio Sutara" required />
          
          <input className="min-w-full  min-h-full border border-[#9adcb9] rounded-xl p-2 focus:outline-none focus:border-4" type="email"  name="email" placeholder="HoracioSutara@gmail.com" required />

          <label className="font-bold">Mensaje </label>
          <textarea className="col-start-1 col-end-3 min-w-full  min-h-full border border-[#9adcb9] rounded-xl p-2 hover:border-[#9adcb9] focus:outline-none focus:border-4" placeholder="Escribenos su mensaje" name="message" rows="6" required></textarea>

          <input className={`${baseStyles}`} type="submit" name="Enviar" value={btm_status} />

        </form>
      </section>
      <div className="flex justify-center w-full h-96 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8618.074454347578!2d-65.3903519701272!3d-24.745619894626692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc14f9aaaaaab%3A0x69dac60239564277!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e0!3m2!1ses!2sar!4v1759356925154!5m2!1ses!2sar"
          width="60%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
