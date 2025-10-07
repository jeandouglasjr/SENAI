import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import App from './App.jsx'
import Filmes from './pages/Filmes.jsx'

  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/app',
      element: <App />
    },
    {
      path: '/filmes/:nome',
      element: <Filmes />
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {rotas} />
  </StrictMode>,
)
