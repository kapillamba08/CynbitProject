import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Career from './components/career.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Career />
  </StrictMode>,
)
