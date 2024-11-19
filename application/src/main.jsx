import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{/* Import de Configuração do React Router */}
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

{/* Criação de Array para import e montagem de paginas/rotas, no qual irá armazenar as variáveis criadas a partir do import das rotas como objetos */}
const router = createBrowserRouter ([

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
