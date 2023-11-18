import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReclamosApp } from './ReclamosApp'
import { BrowserRouter } from 'react-router-dom'
import VerEdificios from './Componentes/edificio/VerEdificio'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>

      
      <ReclamosApp></ReclamosApp>

    </React.StrictMode>
  </BrowserRouter>
 
)
