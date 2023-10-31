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

    /*
    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }*/ 
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    
    

    return (
    <div>

        <h1 className="titulo-login">Login</h1>
        
        <form handleSubmit= {handleSubmit}>

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
                <button type="submit" className="botonSubmit" onClick={handleSubmit}>Submit</button>            
            </div>

            
        </form>
    </div>
  )
}
