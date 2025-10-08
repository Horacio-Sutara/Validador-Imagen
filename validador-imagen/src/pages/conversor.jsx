import { useState } from "react";
import { Boton } from "../components/boton";
import Scroll from "../components/scroll";
import { monedas } from "../constantes/const";

// Función para obtener la URL de la imagen de una moneda
// Aquí usamos un servicio público que devuelve banderas basadas en el código del país
const obtenerImagenMoneda = (codigo) =>
    `https://flagcdn.com/w320/${codigo.slice(0, 2).toLowerCase()}.png`;

function Conversor() {
    const [resultado, setResultado] = useState("");
    const [equivalencia, setequivalencia] = useState("");
    const [moneda_actual, setmonedaActual] = useState("USD");
    const [moneda_conseguir, setmonedaConseguir] = useState("ARS");
    const [cantidad, setcantidad] = useState(0);


    function obtener_datos(url, moneda) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.result === "error") {
                    setResultado("Se ha producido un error: ", data["error-type"]);
                } else {
                    setResultado(`$ ${data.rates[moneda] * cantidad}`);
                    setequivalencia(
                        `La relación: $1${data.base_code} <==> $${data.rates[moneda]} ${moneda}`
                    );
                }
            })
            .catch((err) => {
                console.error("Error en la petición:", err);
                setResultado("Error en la petición:", err);
            });
    }

    function calcular() {
        if (cantidad <= 0) return;
        const url = `https://open.er-api.com/v6/latest/${moneda_actual}`;
        obtener_datos(url, moneda_conseguir);
        console.log(`${moneda_actual}--${moneda_conseguir}--${resultado}--${cantidad}`);
    }

    return (
        <>
         <h1 className="min-w-full flex justify-center text-center font-bold text-5xl"> Conversor</h1> 

             <section className="grid grid-cols-4
                bg-white border rounded-2xl
                m-20 gap-3 p-3">
                    
                <p className="col-span-2 text-center">Moneda Actual</p>
                <p className="col-start-3 col-end-5 text-center">Equivalente</p>
                <input
                    type="number"
                    className="pr-2 text-end border-verde-menta text-2xl"
                    value={cantidad}
                    onChange={(e) => setcantidad(e.target.value)}
                />
                <div className="relative">
                    <Scroll objetos={monedas} setter={setmonedaActual} eleccion={moneda_actual} />
                </div>

                <p className="text-end p-2 text-2xl">{resultado}</p>
                <div className="relative">
                    <Scroll
                        objetos={monedas}
                        setter={setmonedaConseguir}
                        eleccion={moneda_conseguir}
                    />
                </div>
                <p></p>
                                                    <img
                        src={obtenerImagenMoneda(moneda_actual)}
                        alt={`Imagen de ${moneda_actual}`}
                        className="col-span-2 w-xs h-16 mt-2 "
                    />
                                    <img
                        src={obtenerImagenMoneda(moneda_conseguir)}
                        alt={`Imagen de ${moneda_conseguir}`}
                        className="w-xs h-16 mt-2"
                    />
                <p className="col-span-3 text-center font-bold text-2xl"> {equivalencia}</p>
                <Boton mensaje="calcular" accion={calcular} />
            </section>
        </>
    );
}

export default Conversor;