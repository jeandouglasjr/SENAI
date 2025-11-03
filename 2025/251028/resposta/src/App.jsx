// Define as rotas da aplicação.
// /login é pública; as demais são protegidas por <ProtectedRoute/>.

import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import People from './pages/People.jsx';
import Planets from './pages/Planets.jsx';
import Films from './pages/Films.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/personagens" element={<People />} />
        <Route path="/planetas" element={<Planets />} />
        <Route path="/filmes" element={<Films />} />
      </Route>

      {/* Redirecionamento padrão */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
