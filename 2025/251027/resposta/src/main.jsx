import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider.jsx'
import RotaProtegida from './components/RotaProtegida.jsx'

// Definição das páginas da aplicação
const roteador = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <RotaProtegida elemento={ <Home/>} />,
  },
  {
    path: '/contato/:id',
    element: <RotaProtegida elemento={ <Contato/>} />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={roteador} />
    </AuthProvider>
  </StrictMode>
)
