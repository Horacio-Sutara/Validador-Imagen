import { useState } from "react";

function Conversor(){
    const [resultado,setResultado]=useState("");


    const API_KEY = "";
    //const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${moneda_actual}/${moneda_conseguir}/${cantidad}`;
    const url = `https://open.er-api.com/v6/latest/USD`;//ultima cotizacion de la moneda actual en todas las monedas (sin api key)

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.result=="error"){
                setResultado("Se ha producido un error: ", data.error-type);
            }
            else{
                setResultado(`El equivalente monetario a ${data.rates.ARS}` );
                console.log(data.rates);
            }

        })
        .catch(err => {
            console.error("Error en la petición:", err)
            setResultado("Error en la petición:", err);
        });

    return (
        <>
         <h1> Convierta la moneda</h1> 
         <h2>{resultado} </h2>
        <label htmlFor="frutas">Selecciona una fruta:</label>
        <select id="frutas" name="frutas">
        <option value="manzana">Manzana</option>
        <option value="banana">Banana</option>
        <option value="naranja">Naranja</option>
        <option value="pera">Pera</option>
        <option value="uva">Uva</option>
        </select>
        </>
    );

};

export default Conversor;