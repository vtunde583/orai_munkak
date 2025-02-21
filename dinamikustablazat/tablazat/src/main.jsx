import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Regiok from './regiok.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Regiok/>
  </StrictMode>,
)
