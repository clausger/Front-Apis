import { Home } from "./Componentes/home/Home"
import { Login } from "./Componentes/login/Login"
import { Route, Routes } from "react-router-dom"
import { VerUsuarios } from "./Componentes/usuarios/VerUsuarios"
import { AgregarAdmin } from "./Componentes/usuarios/agregarUsuarios/AgregarAdmin"
import AgregarDueno from "./Componentes/usuarios/agregarUsuarios/AgregarDueno"

export const ReclamosApp = () => { 
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login> </Login>}> </Route>
        <Route path="/login" element={<Login> </Login>}> </Route>
        <Route path="/home" element={<Home> </Home>}> </Route>
        <Route path="/usuario" element={<VerUsuarios></VerUsuarios>}></Route>
        <Route path="/usuario/admin" element={<AgregarAdmin></AgregarAdmin>}></Route>
        <Route path="/usuario/dueno" element={<AgregarDueno></AgregarDueno>}></Route>
      </Routes>
    </div>
  )
}

