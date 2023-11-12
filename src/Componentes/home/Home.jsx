import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { HomeAdmin } from "./HomeAdmin";
import { HomeCliente } from "./HomeCliente";
import { Login } from "../login/Login";
import { useLocation, useNavigate } from "react-router-dom";

const rol = "admin" // ESTO SE SACARIA DEL TOKEN DEL SESSION LOG, SI ES VACIO TE TIRA AL LOGIN

export const Home = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    useEffect(() => {
      if (rol !== "admin" && rol !== "inquilino" && rol !== "dueno")
        navigate("/Login", { state: location.state });
    },[])

    const componentByAuth = () =>{
    // const token = ""+sessionStorage.getItem("token")
    
    // console.log(JSON.parse(decodedPayload))
   
      if (rol === "admin"){
        return (<HomeAdmin></HomeAdmin>)
      } else if (rol === "inquilino" || rol === "dueno"){
        return (<HomeCliente></HomeCliente>)
      }else{
        return (<h2>Credenciales Invalidas</h2>)
      }
  }

  return (
    <div>
      
      <div class="navbar">
        <a href="#" class="logo">Logo</a>
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
      </div>
      <div>
        {componentByAuth()}
      </div>    
    </div>
  )
}
