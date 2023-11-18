import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/generalStyle.css"

export const ActualizarReclamosUnidad = () => {

    const reclamo = JSON.parse(sessionStorage.getItem("update"))

    const [descripcion, setDescripcion] = useState(reclamo.descripcion);
    const [idEdificio, setIdEdificio] = useState(reclamo.idEdificio);
    const [idUsuario, setIdUsuario] = useState(reclamo.idUsuario);
    const [unidad, setUnidad] = useState(reclamo.unidad);
    const [estado, setEstado] = useState(reclamo.estado);
    const [mensaje, setMensaje] = useState(reclamo.mensaje);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoReclamo = { descripcion, idEdificio, idUsuario, unidad, estado, mensaje }

        setDescripcion('');
        setIdEdificio('');
        setIdUsuario('');
        setUnidad('');
        setEstado('');
        setMensaje('');

        const settings = {
            method: "PUT",
            body: JSON.stringify(nuevoReclamo),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
            }
        }

        await fetch(`http://localhost:8080/api/reclamoUnidad/${reclamo.idReclamo}`, settings)
        .then((response) => {
            if(!response.ok){
                console.log('ALGO PASO', response.status)
            }
            console.log(response.status)
            navigate('/reclamos')
        })
        .catch((error) => {
            console.log("ERROR")
        })

    };

    return ( <div>
        <Link to='/reclamos'>
            <button className="backButton">Back</button>
        </Link>
        <h3>Actualizar Reclamo Unidad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del edificio" value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del usuario" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id de unidad"  value={unidad} onChange={(e) => setUnidad(e.target.value)}/>
            <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
            <input type="text" placeholder="Ingresa el mensaje"  value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>


            <button type="submit">Actulizar</button>

        </form>
    </div> );
}