// Dashboard com mensagem de boas-vindas e links.
// Inclui Navbar (com botão Sair).

import Navbar from '../components/Navbar.jsx';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: 16 }}>
        <h2>Bem-vindo(a)!</h2>
        <p>Use o menu acima para navegar pelas páginas protegidas.</p>
        <ul>
          <li>Personagens (/personagens)</li>
          <li>Planetas (/planetas)</li>
          <li>Filmes (/filmes)</li>
        </ul>
      </div>
    </>
  );
}
