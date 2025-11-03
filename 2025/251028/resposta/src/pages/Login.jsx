// Tela de Login simples.
// Ao clicar "Entrar": grava "logado"="true", atualiza o contexto e redireciona para /dashboard.

import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    // Se veio de uma rota protegida, volta para lá; senão, vai pro dashboard.
    const from = location.state?.from?.pathname || '/dashboard';
    navigate(from, { replace: true });
  };

  return (
    <div style={{ maxWidth: 420, margin: '64px auto' }}>
      <h1>Login</h1>
      <p>Simulação de autenticação (Context API + localStorage)</p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        {/* Campos fictícios apenas para UX (não são validados)
        <input placeholder="E-mail (fictício)" />
        <input placeholder="Senha (fictícia)" type="password" /> */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
