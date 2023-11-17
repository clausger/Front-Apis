import { Link } from 'react-router-dom';
import 

export const HomeAdmin= () => {
    return (
        <div className='home'>
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
            <Link to='/reclamos'>
                <button>Reclamos</button>
            </Link>
        </div>
    )
}
 