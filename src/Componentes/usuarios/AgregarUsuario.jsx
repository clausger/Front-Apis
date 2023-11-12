import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const AgregarUsuario = () => {

    // TIENE DIFERENTES INPUTS DEPENDIENDO QUE SE QUIERE AGREGAR 
    // ADMIN y DUENO -> SOLO TELELFONO, DIRECCION, EMAIL, NOMBRE, NOMBRE_US, CONTRASEÑA
    // INQUILINO -> UNIDAD_ID

    const [nombre, setNombre] = useState('')
    const [nombreUs, setNombreUs] = useState('')
    const [email, setEmail] = useState('')
    const [direcion, setDirecion] = useState('')
    const [telefono, setTelefono] = useState(0)

    const navigate = useNavigate();
    const location = useLocation();

    const handleSumbit = async (e) => {
        e.preventDefault();

        const body = {nombre, nombreUs, email, direcion, telefono}

        console.log(body)

        setNombre('')
        setNombreUs('')
        setEmail('')
        setDirecion('')
        setTelefono(0)

        navigate("/Usuarios", { state: location.state });
    }

    return (
        <div>
            <div>
                <Link to="/Usuarios">
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <h2>Agergar Usuario</h2>
                <form onSubmit={handleSumbit}>
                    <input type='text' placeholder='Ingresar nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <input type='text' placeholder='Ingresar usuario' value={nombreUs} onChange={(e) => setNombreUs(e.target.value)}/>
                    <input type='text' placeholder='Ingresar email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' placeholder='Ingresar direcion' value={direcion} onChange={(e) => setDirecion(e.target.value)}/>
                    <input type='text' placeholder='Ingresar telefono' value={telefono === 0 ? "" : telefono} onChange={(e) => setTelefono(e.target.value)}/>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}