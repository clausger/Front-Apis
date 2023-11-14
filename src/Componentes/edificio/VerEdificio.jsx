import { useState } from "react";
import { Link } from "react-router-dom";

const VerEdificio = () => {
    
    const [edificios, setEdificios] = useState([])


    return ( 
    <div>
        <div>
                <Link to="/home">
                    <button>Back</button>
                </Link>
        </div>
        <div>
            <h2>Ver Edificios</h2>
            <table className="tablaUsuarios">
                    <thead>
                        <tr>
                            <th>Direcion</th>
                            <th>Ciudad</th>
                            <th>Codigo Postal</th>
                            <th>Pais</th>
                            <th>Acciones</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {edificios.map(edificio => (
                            <tr key={edificio.id}>
                                <td>{edificio.direccion}</td>
                                <td>{edificio.ciudad}</td>
                                <td>{edificio.codigoPostal}</td>
                                <td>{edificio.pais}</td>
                                <td>{<button>Actualizar</button>}</td>
                                <td>{<button onClick={nothing}>Eliminar</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    </div> 
    );
}
 
export default VerEdificio