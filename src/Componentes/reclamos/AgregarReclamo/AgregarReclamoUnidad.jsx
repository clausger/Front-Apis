import { useState } from 'react'


export const AgregarReclamoUnidad = () => {

    const [descripcion, setDescripcion] = useState('');
    const [idEdificio, setIdEdificio] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [lugar, setLugar] = useState('');
    const [estado, setEstado] = useState('');
    const [mensaje, setMensaje] = useState('');


    const [reclamoUnidad, setReclamoUnidad] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const nuevoReclamo = { descripcion, idEdificio, idUsuario, lugar, estado, mensaje };
        setReclamoUnidad([...reclamoUnidad, nuevoReclamo]);

        setDescripcion('');
        setIdEdificio('');
        setIdUsuario('');
        setLugar('');
        setEstado('');
        setMensaje('');
      

      };
    
      return (
        <div>
        <h3>Agregar Reclamo Unidad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del edificio" value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del usuario" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}/>
            <input type="text" placeholder="Ingresa el lugar"  value={lugar} onChange={(e) => setLugar(e.target.value)}/>
            <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
            <input type="text" placeholder="Ingresa el mensaje"  value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>


            <button type="submit">Agregar Reclamo</button>

        </form>

      

        
    </div>
      )
    }

export default AgregarReclamoUnidad;