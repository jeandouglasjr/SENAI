import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Adocao from "./pages/Historico_Adocao.jsx";
import Usuario from "./pages/Usuario.jsx";
import NovoUsuario from "./pages/NovoUsuario.jsx";
import Animal from "./pages/Animal.jsx";
import NovoAnimal from "./pages/NovoAnimal.jsx";
// 💡 Importe o novo componente de Login
import Login from "./pages/Login.jsx";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // 💡 Adicione a rota de Login
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/historico_adocao",
    element: <Adocao />,
  },
  {
    path: "/usuario",
    element: <Usuario />,
  },
  {
    path: "/usuario/novo",
    element: <NovoUsuario />,
  },
  {
    path: "/animal",
    element: <Animal />,
  },
  {
    path: "/animal/novo",
    element: <NovoAnimal />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
