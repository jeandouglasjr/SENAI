import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Adocao from './pages/Adocao.jsx'
import Usuario from './pages/Usuario.jsx'
import Animal from './pages/Animal.jsx'

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/adocao',
      element: <Adocao />
    },
    {
      path: '/usuario',
      element: <Usuario />
    },
    {
      path: '/animal',
      element: <Animal />
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {rotas} />
  </StrictMode>,
)
