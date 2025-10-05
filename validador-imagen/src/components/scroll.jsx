import { useState } from "react";
export default function Scroll({objetos,setter,eleccion}){
    const [activate_scroll, setScroll]= useState(false);

    function set_valor(valor){
        setter(valor);
    }

    return(
    <>
    <button  onClick={()=>{ setScroll(true)}} className="text-center text-white font-bold
     bg-turquesa min-w-full min-h-full
    rounded-2xl 
    hover:bg-turquesa/60 hover:scale-110 ">{eleccion}</button>
    {activate_scroll &&    

    <div className=" absolute top-10 max-h-50 min-w-full overflow-y-auto border-2
    bg-white border-marron-oscuro
    gap-2 p-2 
    text-center text-lg font-bold ">
        {objetos.map((objeto, index) => {
            const [codigo, nombre] = Object.entries(objeto)[0];
            return(
            <div key={index} className="snap-start scroll-ml-6 p-2 border-t"> 
                <button 
                onClick={() => {
                    setScroll(false);
                    set_valor(codigo);
                }}
                className={`
                    hover:bg-verde-menta/60 w-full 
                    ${codigo === eleccion ? "bg-turquesa text-white" : ""}
                `}
                > 
                {`${codigo} (${nombre})`}
                </button>
            </div>);
        })}


    </div>}
    </>
    );
};