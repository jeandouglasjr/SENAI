import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProveder.jsx'

// definição de páginas da aplicação

const roteador = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/contato',
        element: <Contato />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={roteador} />
        </AuthProvider>
    </StrictMode>
)