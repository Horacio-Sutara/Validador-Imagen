import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cabezera from './Cabezera.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabezera/>
    <App />
  </StrictMode>,
)
