import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { HomeAdmin } from "./HomeAdmin";
import { HomeCliente } from "./HomeCliente";
import { Login } from "../login/Login";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const token = sessionStorage.getItem("jwt");
    console.log(token)
    var rol

    if(token !== "Credenciales invalidas" && token !== undefined){
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      rol = decodedPayload.rol
    }else{
      rol = ""
    }

    useEffect(()=>{
      if (rol != "admin" && rol !== "inquilino" && rol !== "dueno")
        navigate("/login", { state: location.state });
    },[])

    const componentByAuth = () =>{
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
