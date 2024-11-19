import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{/* Import das páginas criadas */ }
import Home from './React Router/Home.jsx'
import Contact from './React Router/Contact.jsx'
import Products from './React Router/Products.jsx'
import Nos from './React Router/Nos.jsx'
{/* Import de Configuração do React Router */ }
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
{/* Criação de Array para import e montagem de paginas/rotas, no qual irá armazenar as variáveis criadas a partir do import das rotas como objetos */ }
const router_array = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contato',
        element: <Contact/>
      },
      {
        path: 'produtos',
        element: <Products/>
      },
      {
        path: 'sobre-nos',
        element: <Nos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router_array} />
  </StrictMode>,
)
