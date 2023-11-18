import { Link } from "react-router-dom"
import "../../styles/homeStyle.css"

export const HomeCliente = () => {
    return (
        <div className="home">
            <h2>SOS CLIENTE Dueno/Inquilino</h2>
            <Link to='/reclamos/add_reclamo'>
                <button>Hacer Reclamo</button>
            </Link>
            
            
            <button>Buscar Reclamo por id</button>
            <Link to='/reclamos/edificio'>
                <button>Ver Reclamo de edificio</button>
            </Link>
        </div>
    )
}
 