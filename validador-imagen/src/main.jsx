import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import "./styles/styles.css";
import "./styles/cabezera.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
