import { Link } from 'react-router-dom';

export const HomeAdmin= () => {
    return (
        <div>
            <h2>SOS ADMINISTRADOR</h2>
        
            <Link to='/usuario'>
                <button>Usuarios</button>
            </Link>
            <Link to='/edificio'>
                <button>Edificio</button>
            </Link>
            <Link to='/unidad'>
                <button>Unidad</button>
            </Link>
        </div>
    )
}
 