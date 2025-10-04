import { Boton } from "./boton";
import sprite from "../assets/sprite.svg"
function Modal({mensaje,descripcion,isOpen,cerrar,icon}){
    if (!isOpen) return;


    return(
        <dialog open={true} className="min-w-full min-h-full bg-black/40  flex justify-center items-center">
            <div className="relative flex flex-col justify-center items-center
            w-md 
             p-3 border-2 gap-3
            bg-white border-[#9adcb9] rounded-2xl ">
                <button  className=" absolute top-2 right-2 text-2xl p-1 rounded hover:scale-125 " onClick={cerrar}> ❌</button>
                {
                icon && <svg className="size-20">
                    <use fill="#5ac7aa" href ={`${sprite}#${icon}`} />
                </svg>
                }
                <h1 className="font-bold text-2xl" >{mensaje}</h1>
                <p className="text-xl text-balance text-center">{descripcion}</p>
                <Boton accion={cerrar}mensaje="Entendido" />
            </div>
        </dialog>

    );

}
export default Modal;