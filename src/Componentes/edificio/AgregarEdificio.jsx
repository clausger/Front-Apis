import { useState } from 'react'


export const AgregarEdificio = () => {

    const [ciudad, setCiudad] = useState('');
    const [postal, setPostal] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');

    const [edificio, setEdificio] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const nuevoEdificio = { ciudad, postal, direccion, pais };
        setEdificio([...edificio, nuevoEdificio]);
        setCiudad('');
        setPostal('');
        setDireccion('');
        setPais('');
        
      

      };
    
      return (
        <div>
        <h3>Agregar Edificio</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa la ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
            <input type="text" placeholder="Ingresa el codigo postal" value={postal} onChange={(e) => setPostal(e.target.value)}/>
            <input type="text" placeholder="Ingresa la direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>

            <input type="text" placeholder="Ingresa el pais"  value={pais} onChange={(e) => setPais(e.target.value)}/>

            <button type="submit">Agregar Edificio</button>

        </form>

      

        
    </div>
      )
    }

export default AgregarEdificio;