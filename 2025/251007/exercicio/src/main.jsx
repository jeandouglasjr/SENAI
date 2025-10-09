import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Filmes from './pages/Filmes.jsx'

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/filmes',
      element: <Filmes />
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {rotas} />
  </StrictMode>,
)
