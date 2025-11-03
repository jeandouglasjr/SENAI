import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Pagination from '../components/Pagination.jsx';
import Loading from '../components/Loading.jsx';
import ErrorState from '../components/ErrorState.jsx';
import useSwapiPage from '../hooks/useSwapiPage.js';

export default function Planets() {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasNext, hasPrev } = useSwapiPage('/planets', page);

  return (
    <>
      <Navbar />
      <div style={{ padding: 16 }}>
        <h2>Planetas</h2>

        {loading && <Loading />}
        {error && <ErrorState message="Não foi possível carregar os planetas." />}

        {!loading && !error && (
          <>
            <ul>
              {data?.results?.map((pl) => (
                <li key={pl.url}>
                  <strong>{pl.name}</strong> — Clima: {pl.climate} — População: {pl.population}
                </li>
              ))}
            </ul>

            <Pagination
              page={page}
              hasPrev={hasPrev}
              hasNext={hasNext}
              onPrev={() => setPage((n) => Math.max(1, n - 1))}
              onNext={() => setPage((n) => n + 1)}
            />
          </>
        )}
      </div>
    </>
  );
}
