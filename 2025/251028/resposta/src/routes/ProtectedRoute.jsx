// Componente de guarda de rotas (v6).
// Se autenticado, renderiza <Outlet/> (a rota filha); caso contrário, navega para /login.

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // ou um spinner global se preferir

  if (!isAuthenticated) {
    // Mantém a rota de origem (state.from) para uso futuro, se quiser
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
