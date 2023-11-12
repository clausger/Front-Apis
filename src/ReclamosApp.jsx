import { Home } from "./Componentes/home/Home"
import { Login } from "./Componentes/login/Login"
import { Route, Routes } from "react-router-dom"
import { VerUsuarios } from "./Componentes/usuarios/VerUsuarios"
import { AgregarUsuario } from "./Componentes/usuarios/AgregarUsuario"

export const ReclamosApp = () => { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login> </Login>}> </Route>
        <Route path="/Home" element={<Home> </Home>}> </Route>
        <Route path="/Usuarios" element={<VerUsuarios></VerUsuarios>}></Route>
        <Route path="/Usuarios/Agregar" element={<AgregarUsuario></AgregarUsuario>}></Route>
      </Routes>
    </div>
  )
}

