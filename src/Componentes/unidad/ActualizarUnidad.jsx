import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const ActualizarUnidad = () => {
    const unidad = JSON.parse(sessionStorage.getItem("update"))

    const [idDueno, setIdDueno] = useState(unidad.idDueno);
    const [piso, setPiso] = useState(unidad.piso);
    const [depto, setDepto] = useState(unidad.departamento);
    const [estado, setEstado] = useState(unidad.estado);
    const [idEdificio, setIdEdificio] = useState(unidad.idEdificio);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { idDueno, piso, departamento:depto, estado, idEdificio }

        setIdDueno('');
        setPiso('');
        setDepto('');
        setEstado('');
        setIdEdificio('');
        
        const settings = {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
          }
        }
  
        await fetch(`http://localhost:8080/api/unidad/${unidad.idUnidad}`, settings)
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
                <button>Back</button>
            </Link>
        <h3>Agregar Unidad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el id del Dueño" value={idDueno} onChange={(e) => setIdDueno(e.target.value)}/>
            <input type="text" placeholder="Ingresa el piso" value={piso} onChange={(e) => setPiso(e.target.value)}/>
            <input type="text" placeholder="Ingresa el departamento" value={depto} onChange={(e) => setDepto(e.target.value)}/>
            <input type="text" placeholder="Ingresa el estado"  value={estado} onChange={(e) => setEstado(e.target.value)}/>
            <input type="text" placeholder="Ingresa el id del edificio"  value={idEdificio} onChange={(e) => setIdEdificio(e.target.value)}/>

            <button type="submit">Actualizar</button>

        </form>
    </div> );

}
