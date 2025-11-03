// Navegação de página "Anterior" e "Próximo".
// Desabilita botões conforme disponibilidade da SWAPI.

export default function Pagination({ page, hasPrev, hasNext, onPrev, onNext }) {
    return (
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button disabled={!hasPrev} onClick={onPrev}>Anterior</button>
        <span>Página {page}</span>
        <button disabled={!hasNext} onClick={onNext}>Próximo</button>
      </div>
    );
  }
  