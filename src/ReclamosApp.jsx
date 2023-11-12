import { Home } from "./Componentes/home/Home"
import { Login } from "./Componentes/login/Login"
import { Route, Routes } from "react-router-dom"

export const ReclamosApp = () => { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login> </Login>}> </Route>
        <Route path="/Home" element={<Home> </Home>}> </Route>
      </Routes>
    </div>
  )
}

