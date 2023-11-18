import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/generalStyle.css"

export const AgregarUnidad = () => {

    const [idDueno, setIdDueno] = useState('');
    const [piso, setPiso] = useState('');
    const [depto, setDepto] = useState('');
    const [estado, setEstado] = useState('');
    const [idEdificio, setIdEdificio] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      const nuevaUnidad = { idDueno, piso, departamento:depto, estado, idEdificio };      

      setIdDueno('');
      setPiso('');
      setDepto('');
      setEstado('');
      setIdEdificio('');
      
      const settings = {
        method: "POST",
        body: JSON.stringify(nuevaUnidad),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
        }
      }

      await fetch(`http://localhost:8080/api/unidad`, settings)
        .then((response) => {
            if (!response.ok){
                console.log('ALGO PASO MAL', response.status)
            }
            else{
              navigate("/unidad")
            }
            return response.json()
        }).catch((error) => {
            console.log("ERROR")
        })
      };
    
      return (
        <div>
          <Link to="/unidad">
                <button className='backButton'>Back</button>
            </Link>
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