import { useState } from 'react'

export const Login = () => {
  
    const [formstate, setformstate] = useState({
        nombreUsuario: "", 
        password: ""
    })

    const {nombreUsuario, password} = formstate
  

    const onInputChange = ({target}) => {

        const {name, value} = target
        setformstate({...formstate,
        [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const nombreUs = document.querySelector("input[name='nombreUsuario']")
        const contra = document.querySelector("input[name='password']")
    
        const payload = {nombreUs: nombreUs.value, contraseña: contra.value}

        console.log(JSON.stringify(payload))
        
        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch("http://localhost:8080/auth/login", settings)
        .then(response => {
            if (!response.ok) {
                console.log("MAL USUARIO")
            }

            const responseJSON = response.text();
            return responseJSON;
        }).then(data => {
            console.log("Promesa cumplida:", data);
            
            if (data != null && data != undefined) {
                localStorage.setItem('jwt', data);
            
                // window.location.href = window.location.origin    // -> ESTO NOS LLEVA AL HOME 
            }
        }).catch(err => console.error(`Error: ${err}`))
        
    }
    

    return (
    <div>

        <h1 className="titulo-login">Login</h1>
        
        <form onSubmit={handleSubmit}>

            <div className="casilla">
                
                <input 
                type="text" 
                className="casillaNombre"
                name="nombreUsuario"
                placeholder="Nombre Usuario"
                value={nombreUsuario}
                onChange= {onInputChange}
                />
            
            </div>

            <div className="casilla">
                    <input 
                    type="password" 
                    className="casillaContraseña"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange= {onInputChange} 
                    />
            </div>

            <div className="botonSubmit">
                <button type="submit" className="botonSubmit">Submit</button>            
            </div>

            
        </form>
    </div>
  )
}
