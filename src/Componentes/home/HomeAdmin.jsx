import { Link } from 'react-router-dom';

export const HomeAdmin= () => {
    return (
        <div>
            <h2>SOS ADMINISTRADOR</h2>
        
            <Link to='/Usuarios'>
                <button>Usuarios</button>
            </Link>
        </div>
    )
}
 