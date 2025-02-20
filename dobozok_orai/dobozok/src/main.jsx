import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Termekek from './Termekek.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Termekek />
  </StrictMode>,
)
