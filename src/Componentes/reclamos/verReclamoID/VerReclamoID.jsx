import {Link} from "react-router-dom"
import { useState } from "react";
import "../../../styles/generalStyle.css"

export const VerReclamosID = () => {
    const [reclamo, setReclamo] = useState("")
    const [value, setValue] = useState("");

    const handleBuscar= async ()=>{
        console.log(`value ${value} de ${typeof value}`)

        if (!Number.isInteger(parseInt(value))){
            window.alert("Ingresa un numero")
            return null;
        }

        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        await fetch(`http://localhost:8080/api/reclamo/${value}`, settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
                if(response.text !== null){
                    window.alert(`El reclamo con id ${value} no fue encontrado`)
                }
            }  
            return response.json()
        }).then((data) => {
            setReclamo(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    const buscarFecha = (fecha) =>{
        const date = new Date(fecha + (1 * 24 * 60 * 60 * 1000)) // LE AGREGO UN DIA PORQ SE GUARDA UN DIAS MENOS EN EL BACKEND
        
        return date.toLocaleDateString();
    }

    return ( <div>
        
        <div>
            <div>
                <Link to='/home'>
                    <button className="backButton">Back</button>
                </Link>
            </div>

            <div className="buscador">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={handleBuscar}>Buscar</button>
            </div>
        </div>
        <div className="informacion">
            <div>Descripcion: {reclamo.descripcion}</div>
            <div>Lugar: {reclamo.lugar}</div>
            <div>Fecha: {buscarFecha(reclamo.fecha)}</div>
            <div>Estado: {reclamo.estado}</div>
            <div>Mensaje: {reclamo.mensaje}</div>
            <div>Edificio: {reclamo.idEdificio}</div>
            <div>Usuario: {reclamo.idUsuario}</div>
        </div>
    </div> );
}