import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Usuario from "./pages/Usuario.jsx";
import NovoUsuario from "./pages/NovoUsuario.jsx";
import EditarUsuario from "./pages/EditarUsuario.jsx";
import Animal from "./pages/Animal.jsx";
import NovoAnimal from "./pages/NovoAnimal.jsx";
import EditarAnimal from "./pages/EditarAnimal.jsx";
import NovoHistoricoAdocao from "./pages/NovoHistorico_Adocao.jsx";
import HistoricoAdocao from "./pages/Historico_Adocao.jsx";
// 💡 Importe o novo componente de Login
import Login from "./pages/Login.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const token = localStorage.getItem("userToken");

const rotas = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/usuario/novo",
    element: <NovoUsuario />,
  },
  {
    path: "/usuario/editar/:id",
    element: <EditarUsuario />,
  },
{
    path: "/animal",
    element: <Animal />,
  },
  {
    path: "/animal/novo",
    element: <NovoAnimal />,
  },
  {
    path: "/animal/editar/:id",
    element: <EditarAnimal />,
  },
{
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // 💡 Adicione a rota de Login
      {
        path: "/usuario",
        element: <Usuario />,
      },
      {
        path: "/historico_adocao",
        element: <HistoricoAdocao />,
      },
      {
        path: "/historico_adocao/novo",
        element: <NovoHistoricoAdocao />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
