import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AlmuerziApp } from './AlmuerziApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AlmuerziApp />
    </React.StrictMode>
  </BrowserRouter>
  
  
)
