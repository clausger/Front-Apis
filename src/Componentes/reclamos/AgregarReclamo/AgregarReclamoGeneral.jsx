import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AgregarReclamoGeneral = () => {

    const [descripcion, setDescripcion] = useState('');
    const [idEdificio, setIdEdificio] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [lugar, setLugar] = useState('');
    const estado = 'Nuevo'
    const mensaje = ''

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { descripcion, idEdificio, idUsuario, lugar, estado, mensaje };
      
        setDescripcion('');
        setIdEdificio('');
        setIdUsuario('');
        setLugar('');
      
        const settings = {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
          }
        }

        await fetch(`http://localhost:8080/api/reclamoGeneral`, settings)
        .then((response) => {
            if (!response.ok){
              console.log('ALGO PASO MAL', response.status)
              window.alert(`El reclamoGeneral no tiene todos los parametros necesarios o estan erroneos`) 
            }
            return response.json()
        }).then((data) => {
            window.alert(`RECLAMO GUARDADO CON EXITO, PARA CONSULTARLO EL ID ES ${data}`) 
            navigate("/home")
        }).catch((error) => {
            console.log("ERROR")
        })
      };
    
      return (
        <div>
        <h3>Agregar Reclamo General</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del edificio" value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del usuario" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}/>
            <input type="text" placeholder="Ingresa el lugar"  value={lugar} onChange={(e) => setLugar(e.target.value)}/>
            <button type="submit">Agregar Reclamo</button>
        </form>

      

        
    </div>
      )
    }

export default AgregarReclamoGeneral;