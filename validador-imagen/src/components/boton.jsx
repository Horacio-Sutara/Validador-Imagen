export function Boton({mensaje, accion}){
    return(
        <button onClick={accion}className="bg-turquesa rounded-2xl p-1.5 text-white font-bold hover:bg-marron-oscuro w-full"> {mensaje} </button>
    );
}