import { useState } from 'react'


export const AgregarReclamoUnidad = () => {

    const [descripcion, setDescripcion] = useState('');
    const [idEdificio, setIdEdificio] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [idUnidad, setUnidad] = useState('');
    const [estado, setEstado] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const body = { descripcion, idEdificio, idUsuario, unidad:idUnidad, estado, mensaje };

      setDescripcion('');
      setIdEdificio('');
      setIdUsuario('');
      setUnidad('');
      setEstado('');
      setMensaje('');
      
      const settings = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
        }
      }
      
      console.log(body)

      await fetch(`http://localhost:8080/api/reclamoUnidad`, settings)
        .then((response) => {
            if (!response.ok) {
              console.log('ALGO PASO MAL'+ response.status)
              window.alert(`El reclamoUnidad no tiene todos los parametros necesarios o estan erroneos`) 
            }
            return response.json()
        }).catch((error) => {
            console.log("ERROR")
        })

      };
    
      return (
      <div>
        <h3>Agregar Reclamo Unidad</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingresa el descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
          <input type="text" placeholder="Ingresa el id del edificio" value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>
          <input type="text" placeholder="Ingresa el id del usuario" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}/>
          <input type="text" placeholder="Ingresa el id de unidad"  value={idUnidad} onChange={(e) => setUnidad(e.target.value)}/>
          <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
          <input type="text" placeholder="Ingresa el mensaje"  value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>

          <button type="submit">Agregar Reclamo</button>
        </form>
      </div>
      )
    }

export default AgregarReclamoUnidad;