import { useEffect, useState } from 'react'
import { Link, useNavigate} from "react-router-dom";

export const VerUnidades = () => {
    const [unidades, setUnidades] = useState([]);
    const navigate = useNavigate();

    var token;
    
    useEffect(() => {
        token = sessionStorage.getItem("jwt")
        obtenerUnidades();
    },[])

    const obtenerUnidades = async () =>{
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }

        await fetch('http://localhost:8080/api/unidades', settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }
            return response.json()
        }).then((data) => {
            setUnidades(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    const handleActualizarEdificio = (edificio) =>{
        /* sessionStorage.setItem("update", JSON.stringify(edificio))
        navigator('/edificio/update_edificio') */
    }

    const handleEliminarEdificio = async (id) =>{
        const settings = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        await fetch(`http://localhost:8080/api/unidad/${id}`, settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }
            window.location.reload(true)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    return ( 
    <div>
        <div>
            <Link to="/home">
                <button>Back</button>
            </Link>
            <Link to="/unidad/add_unidad">
                    <button>Agregar Unidad</button>
            </Link>
        </div>
        <div>
            <h2>Ver Unidades</h2>
            <table className="tablaUsuarios">
                    <thead>
                        <tr>
                            <th>idEdificio</th>
                            <th>Piso</th>
                            <th>Departamento</th>
                            <th>Estado</th>
                            <th>idDueno</th>
                            <th>Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {unidades.map(unidad => (
                            <tr key={unidad.idUnidad}>
                                <td>{unidad.idEdificio}</td>
                                <td>{unidad.piso}</td>
                                <td>{unidad.departamento}</td>
                                <td>{unidad.estado}</td>
                                <td>{unidad.idDueno}</td>
                                <td>{<button onClick={() => handleActualizarEdificio(unidad)}>Actualizar</button>}</td>
                                <td>{<button onClick={() => handleEliminarEdificio(unidad.idUnidad)}>Eliminar</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    </div> 
    );
}
