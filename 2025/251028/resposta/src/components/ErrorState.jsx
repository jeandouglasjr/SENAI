export default function ErrorState({ message = 'Erro ao carregar dados.' }) {
    return <p style={{ color: 'crimson' }}>{message}</p>;
  }
  