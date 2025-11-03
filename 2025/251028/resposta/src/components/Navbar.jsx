// Barra simples com links para as páginas protegidas e botão de sair.

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: isActive ? 'underline' : 'none',
});

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleExit = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 12, borderBottom: '1px solid #ddd' }}>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/personagens" style={linkStyle}>Personagens</NavLink>
      <NavLink to="/planetas" style={linkStyle}>Planetas</NavLink>
      <NavLink to="/filmes" style={linkStyle}>Filmes</NavLink>

      <div style={{ marginLeft: 'auto' }}>
        <button onClick={handleExit}>Sair</button>
      </div>
    </nav>
  );
}
