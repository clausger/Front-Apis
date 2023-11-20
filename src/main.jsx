import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReclamosApp } from './ReclamosApp'
import { BrowserRouter } from 'react-router-dom'
import VerEdificios from './Componentes/edificio/VerEdificio'
import {Login} from './Componentes/login/Login.jsx'
import {VerUsuarios} from './Componentes/usuarios/VerUsuarios.jsx'
import {VerReclamosID} from './Componentes/reclamos/verReclamoID/VerReclamoID.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Login></Login>  */}
      {/*  <VerUsuarios></VerUsuarios>  */}
      {/*  <ReclamosApp></ReclamosApp>*/}
      <VerReclamosID></VerReclamosID>

    </React.StrictMode>
  </BrowserRouter>
 
)
