import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import  axios  from 'axios'

export const VerUsuarios = () => {

    // ACA VA UN TABLA PARA USUARIOS
    // TODOS TIENE TELELFONO, DIRECCION, EMAIL, NOMBRE, NOMBRE_US

    const [administradores, setAdministradores] = useState([]);
    var token;

    useEffect(() => {
        token = sessionStorage.getItem("jwt")
        if(token === null){
            console.log('VOLVER A EL LOGIN')
        }
        obtenerUsuarios();
    },[]);

    const obtenerUsuarios = async () => {
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }
        await fetch('http://localhost:8080/api/admins', settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL JAJA', response.status)
            }
            return response.json()
        }).then((data) => {
            setAdministradores(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    return (
        <div>
            <div>
                <Link to="/Home">
                    <button>Back</button>
                </Link>
            </div>
            <div className="bodyUsuarios">
                <h2>Ver Usuarios</h2>
                <h3>Administradores: </h3>
                <div>
                    <Link to="/Usuarios/Agregar">
                        <button>AgregarUsuario</button>
                    </Link>
                </div>
                <table className="tablaUsuarios">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Direcion</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {administradores.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.nombreUs}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.direcion}</td>
                                <td>{usuario.telefono}</td>
                                <td>{<button>Actualizar</button>}</td>
                                <td>{<button>Eliminar</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Duenos</h3>
                <h3>Inquilinos</h3>
            </div>
        </div>
        
    )
}