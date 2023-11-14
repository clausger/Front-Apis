import { useState } from 'react'


export const AgregarUnidad = () => {

    const [idDueno, setIdDueno] = useState('');
    const [piso, setPiso] = useState('');
    const [depto, setDepto] = useState('');
    const [estado, setEstado] = useState('');
    const [idEdificio, setIdEdificio] = useState('');


    const [unidad, setUnidad] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const nuevaUnidad = { idDueno, piso, depto, estado, idEdificio };
        setUnidad([...unidad, nuevaUnidad]);

        setIdDueno('');
        setPiso('');
        setDepto('');
        setEstado('');
        setIdEdificio('');
        
      

      };
    
      return (
        <div>
        <h3>Agregar Unidad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el id del Dueño" value={idDueno} onChange={(e) => setIdDueno(e.target.value)}/>
            <input type="text" placeholder="Ingresa el piso" value={piso} onChange={(e) => setPiso(e.target.value)}/>
            <input type="text" placeholder="Ingresa el departamento" value={depto} onChange={(e) => setDepto(e.target.value)}/>
            <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del edificio"  value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>

            <button type="submit">Agregar Unidad</button>

        </form>

      

        
    </div>
      )
    }

export default AgregarUnidad;