import { Link } from "react-router-dom"

export const HomeCliente = () => {
    return (
        <div>
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
 