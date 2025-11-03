// Contexto de autenticação simples usando localStorage.
// Chave usada: "logado" -> "true" | "false"

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // loading: evita "piscar" de rota enquanto lemos o localStorage
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Na montagem, lê o localStorage para inicializar o estado
  useEffect(() => {
    const flag = localStorage.getItem('logado');
    setIsAuthenticated(flag === 'true');
    setLoading(false);
  }, []);

  // Função de login: grava "logado" = "true"
  const login = () => {
    localStorage.setItem('logado', 'true');
    setIsAuthenticated(true);
  };

  // Função de logout: remove/zera e atualiza estado
  const logout = () => {
    localStorage.removeItem('logado');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}
