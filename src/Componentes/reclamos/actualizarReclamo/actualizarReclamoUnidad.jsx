import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../../styles/generalStyle.css"

export const ActualizarReclamosUnidad = () => {

    const reclamo = JSON.parse(sessionStorage.getItem("update"))

    const descripcion = reclamo.descripcion
    const idEdificio = reclamo.idEdificio
    const idUsuario = reclamo.idUsuario
    const unidad = reclamo.unidad

    const [estado, setEstado] = useState(reclamo.estado);
    const [mensaje, setMensaje] = useState(reclamo.mensaje);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoReclamo = { descripcion, idEdificio, idUsuario, unidad, estado, mensaje }

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

        sessionStorage.removeItem("update")

    };

    const buscarFecha = (fecha) =>{
        const date = new Date(fecha) // LE AGREGO UN DIA PORQ SE GUARDA UN DIAS MENOS EN EL BACKEND
        
        return date.toLocaleDateString();
    }

    return ( <div>
        <Link to='/reclamos'>
            <button className="backButton">Back</button>
        </Link>
        <h3>Actualizar Estado Reclamo Unidad</h3>

        <div className="informacion">
            <div>Descripcion: {reclamo.descripcion}</div>
            <div>Unidad: {reclamo.unidad}</div>
            <div>Fecha: {buscarFecha(reclamo.fecha)}</div>
            <div>Edificio: {reclamo.idEdificio}</div>
            <div>Usuario: {reclamo.idUsuario}</div>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <>Estado:  </>
                    <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
                </div>
                <div>
                    <>Mensaje: </>    
                    <input type="text" placeholder="Ingresa el mensaje"  value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>
                </div>
                <button type="submit">Actulizar</button>
            </form>
        </div>
    </div> );
}