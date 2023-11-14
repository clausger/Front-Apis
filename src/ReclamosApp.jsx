import { Home } from "./Componentes/home/Home"
import { Login } from "./Componentes/login/Login"
import { Route, Routes } from "react-router-dom"
import { VerUsuarios } from "./Componentes/usuarios/VerUsuarios"
import { AgregarAdmin } from "./Componentes/usuarios/agregarUsuarios/AgregarAdmin"
import AgregarDueno from "./Componentes/usuarios/agregarUsuarios/AgregarDueno"
import AgregarInquilino from "./Componentes/usuarios/agregarUsuarios/AgregarInquilino"
import VerEdificio from "./Componentes/edificio/VerEdificio"
import { ActualizarAdmin } from "./Componentes/usuarios/actualizarUsuarios/actualizarAdmin"

export const ReclamosApp = () => { 
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login> </Login>}> </Route>
        <Route path="/login" element={<Login> </Login>}> </Route>
        <Route path="/home" element={<Home> </Home>}> </Route>
        <Route path="/usuario" element={<VerUsuarios></VerUsuarios>}></Route>
        <Route path="/usuario/admin" element={<AgregarAdmin></AgregarAdmin>}></Route>
        <Route path="/usuario/update_admin" element={<ActualizarAdmin></ActualizarAdmin>}></Route>
        <Route path="/usuario/dueno" element={<AgregarDueno></AgregarDueno>}></Route>
        <Route path="/usuario/inquilino" element={<AgregarInquilino></AgregarInquilino>}></Route>
        <Route path="/edificio" element={<VerEdificio></VerEdificio>}></Route>
      </Routes>
    </div>
  )
}

