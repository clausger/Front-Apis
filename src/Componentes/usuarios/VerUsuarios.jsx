import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import  axios  from 'axios'

export const VerUsuarios = () => {

    const [administradores, setAdministradores] = useState([]);
    const [duenos, setDuenos] = useState([]);
    const [inquilino, setInquilinos] = useState([]);

    var token;

    useEffect(() => {
        token = sessionStorage.getItem("jwt")
        if(token === null){
            console.log('VOLVER A EL LOGIN')
        }
        obtenerAdministra();
        obtenerDueno();
        obtenerInquilinos();
    },[]);

    const obtenerAdministra = async () => {
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

    const obtenerDueno = async () => {
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }

        await fetch('http://localhost:8080/api/duenos', settings)
        .then((response)=>{
            if(!response.ok){
                console.log('ALGO PASO', response.status)
            }
            return response.json()
        }).then((data) => {
            setDuenos(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    const obtenerInquilinos = async () => {
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }

        await fetch('http://localhost:8080/api/inquilinos', settings)
        .then((response) => {
            if(!response.ok){
                console.log('ALGO PASO', response.status)
            }
            return response.json() 
        }).then((data) => {
            setInquilinos(data)
        }).catch((error) => {
            console.log("ERROR")
        })
    }

    const obtenerId = async (nombreUs) => {
        var id = 0;
        
        const settings = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }

        await fetch(`http://localhost:8080/api/nombreUs/admin`, settings)
        .then((response) => {
            if(!response.ok){
                console.log('ALGO PASO', response.status)
            }
            const a = parseInt(response.text())
            return a
        }) .then((data) => {
            console.log(data)
            id = data
        }).catch((error) => {
            console.log("ERROR")
        }) 
        return id;
    }

    const handleEliminarAdmin = async () => {
        const filaId = event.target.parentElement.parentElement.key;
        const nombreFila = administradores.find(usuario => usuario.id === filaId).nombreUs;

        const a = obtenerId(nombreFila)
        console.log(nombreFila)

/*         const settings = {
            method: "DELETE",
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
        }) */
    }


    return (
        <div>
            <div>
                <Link to="/home">
                    <button>Back</button>
                </Link>
            </div>
            <div className="bodyUsuarios">
                <h2>Ver Usuarios</h2>
                <h3>Administradores: </h3>
                <div>
                    <Link to="/usuario/admin">
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
                                <td>{<button onClick={handleEliminarAdmin}>Eliminar</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr></hr>
                <h3>Duenos</h3>
                <div>
                    <Link to="/usuario/dueno">
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
                        {duenos.map(usuario => (
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
                <hr></hr>
                <h3>Inquilinos</h3>
                <div>
                    <Link to="/usuario/inquilino">
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
                            <th>idUnidad</th>
                            <th>Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquilino.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.nombreUs}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.direcion}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.idUnidad}</td>
                                <td>{<button>Actualizar</button>}</td>
                                <td>{<button>Eliminar</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}