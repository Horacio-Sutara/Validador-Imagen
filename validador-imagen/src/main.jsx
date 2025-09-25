import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import "./styles/cabezera.css";
import "./styles/styles.css";
import "./styles/contacto.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
