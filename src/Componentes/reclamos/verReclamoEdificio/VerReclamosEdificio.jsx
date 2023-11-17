import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

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
          console.log(data)
          setReclamos(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    return ( 
        <div>
            <div>
                <Link to='/home'>
                    <button>Back</button>
                </Link>
            </div>

        <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={handleBuscar}>Buscar</button>

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
                        <td>{r.fecha}</td>
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