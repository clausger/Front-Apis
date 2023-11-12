import { jwtDecode } from "jwt-decode";

export const Home = () => {
    const componentByAuth = () =>{
    const token = ""+sessionStorage.getItem("token")
    
    console.log(JSON.parse(decodedPayload))
    

     //const decodedToken = jwtDecode(token);
     //const rol = decodedToken.rol; 
     //console.log(rol)
   } 

  return (
    <div>
      
      <div class="navbar">
        <a href="#" class="logo">Logo</a>
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
      </div>
    
      <button onClick={componentByAuth}></button>
    
    </div>
  )
}
