import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const VerUsuarios = () => {

    // ACA VA UN TABLA PARA USUARIOS
    // TODOS TIENE TELELFONO, DIRECCION, EMAIL, NOMBRE, NOMBRE_US

    const [usuarios, setUsuario] = useState([{"nombre":"cambio","nombreUs":"admin","telefono":1,"email":"email@prueba","direcion":"pruebaDir"}]);

    // useEffect(() => {
    //     obtenerUsuarios();
    // },[]);

    return (
        <div>
            <div>
                <Link to="/Home">
                    <button>Back</button>
                </Link>
                
                <Link to="/Usuarios/Agregar">
                    <button>AgregarUsuario</button>
                </Link>

            </div>
            <div className="bodyUsuarios">
                <h2>Ver Usuarios</h2>
                <table className="tablaUsuarios">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Direcion</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.nombreUs}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.direcion}</td>
                                <td>{usuario.telefono}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}