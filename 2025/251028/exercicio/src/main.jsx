import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Personagens from './pages/Personagens.jsx'
import Planetas from './pages/Planetas.jsx'
import Filmes from './pages/Filmes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider.jsx'
import RotaProtegida from './components/RotaProtegida.jsx'

// definição de páginas da aplicação

const roteador = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/personagens',
    element: <RotaProtegida elemento={ <Personagens/>} />
  },
  {
    path: '/planetas',
    element: <RotaProtegida elemento={ <Planetas />} />
  },
  {
    path: '/filmes',
    element: <RotaProtegida elemento={ <Filmes />} />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={roteador} />
    </AuthProvider>
  </StrictMode>
)