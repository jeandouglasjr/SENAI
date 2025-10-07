import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contatos from './pages/Contatos.jsx'
import Produto from './pages/Produto.jsx'

  const rotas = createBrowserRouter([
    {
      path: '/inicio',
      element: <Home />
    },
    {
      path: '/contatos',
      element: <Contatos />
    },
    {
      path: '/',
      element: <App />
    },
    {
      path: '/produto/:nome',
      element: <Produto />
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {rotas} />
  </StrictMode>,
)
