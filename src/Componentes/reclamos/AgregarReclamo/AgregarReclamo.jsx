import { useState, useRef } from "react";
import { AgregarReclamoGeneral } from "./AgregarReclamoGeneral.jsx"
import { AgregarReclamoUnidad } from "./AgregarReclamoUnidad.jsx"

export const AgregarReclamo = () =>{
    const [option, setOption] = useState("A");

     return (
        <div>
            <select onChange={(e) => setOption(e.target.value)}>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        
            {option === "A" ? <AgregarReclamoGeneral></AgregarReclamoGeneral>:<AgregarReclamoUnidad></AgregarReclamoUnidad>}
        </div>
     );
}