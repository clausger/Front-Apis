import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../../../styles/generalStyle.css"

export const VerReclamosEdificio = () => {
    
    const [reclamos, setReclamos] = useState([]);
    //const [usuario, setUsuario] = useState();
    const [value, setValue] = useState("");


    useEffect(() => {
        /* const token = sessionStorage.getItem("jwt")
        const [, payload] = token.split('.');
        const decodedPayload = JSON.parse(atob(payload));           
        const nombreUs = decodedPayload.sub
        
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        fetch(`http://localhost:8080/api/nombreUs/${nombreUs}`, settings)
          .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }   
            return response.json()
          }).then((data) => {
            console.log(data)
            setUsuario(data)
          }).catch((error) => {
              console.log("ERROR")
          }) */      
    },[])

    const handleBuscar = async ()=>{

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

        await fetch(`http://localhost:8080/api/reclamo/?idEdificio=${value}`, settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }  
          return response.json()
        }).then((data) => {
            if (data.length === 0){
                window.alert(`El edificio con id ${value} no fue encontrado`)
            }
            setReclamos(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    const buscarFecha = (fecha) =>{
        const date = new Date(fecha + (1 * 24 * 60 * 60 * 1000)) // LE AGREGO UN DIA PORQ SE GUARDA UN DIAS MENOS EN EL BACKEND
        
        return date.toLocaleDateString();
    }

    return ( 
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

        <table className="tablaUsuario">
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Lugar</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Mensaje</th>
                    <th>Edificio</th>
                    <th>Usuario</th>
                </tr>
            </thead>
             <tbody>
                {reclamos.map(r  => (
                    <tr key={r.idReclamo}>
                        <td>{r.descripcion}</td>
                        <td>{r.lugar}</td>
                        <td>{buscarFecha(r.fecha)}</td>
                        <td>{r.estado}</td>
                        <td>{r.mensaje}</td>
                        <td>{r.idEdificio}</td>
                        <td>{r.idUsuario}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div> 
    );
}