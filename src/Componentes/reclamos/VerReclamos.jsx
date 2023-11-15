import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const VerReclamos = () => {
    const [reclamos, setReclamos] = useState([])

/*     const [fecha, setFecha] = useState();
    const [descripcion, setDescripcion] = useState();
    const [lugar, setLugar] = useState();
    const [idEdificio, setIdEdificio] = useState();
    const [idDueno, setIdDueno] = useState();
    const [estado, setEstado] = useState();
    const [mensaje, setMensaje] = useState(); */

    useEffect(() => {
        obtenerReclamos();
    },[])

    const obtenerReclamos = async () =>{
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }
        await fetch('http://localhost:8080/api/reclamos', settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }
            return response.json()
        }).then((data) => {
            setReclamos(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    return ( 
    <div>
        <Link to="/home">
            <button>Back</button>
        </Link>
        <div>
            <h3>Ver Reclamos</h3>
            <Link to='/reclamos/add_reclamo'>
                <button>Agregar Reclamo</button>
            </Link>
        </div>
        <table className="tablaUsuario">
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Lugar</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Mensaje</th>
                    <th>idEdificio</th>
                    <th>idDueno</th>
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
                        <td>{r.idDueno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>  
    );
}