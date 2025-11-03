// Filmes não são paginados na SWAPI; traz todos e permite ordenar por ano.

import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Loading from '../components/Loading.jsx';
import ErrorState from '../components/ErrorState.jsx';
import { http } from '../lib/http';

export default function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState('none'); // 'none' | 'asc' | 'desc'

  useEffect(() => {
    const ctrl = new AbortController();

    async function fetchFilms() {
      try {
        setLoading(true);
        setError(null);

        // GET /films
        const res = await http.get('/films', { signal: ctrl.signal });
        setFilms(res.data?.results || []);
      } catch (err) {
        if (err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
    return () => ctrl.abort();
  }, []);

  const sorted = useMemo(() => {
    const list = films.map(f => ({
      ...f,
      year: Number(String(f.release_date).slice(0, 4)) || 0,
    }));
    if (order === 'asc') list.sort((a, b) => a.year - b.year);
    if (order === 'desc') list.sort((a, b) => b.year - a.year);
    return list;
  }, [films, order]);

  return (
    <>
      <Navbar />
      <div style={{ padding: 16 }}>
        <h2>Filmes</h2>

        <div style={{ margin: '8px 0 16px' }}>
          <label>
            Ordenar por ano:&nbsp;
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="none">Sem ordenação</option>
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </label>
        </div>

        {loading && <Loading />}
        {error && <ErrorState message="Não foi possível carregar os filmes." />}

        {!loading && !error && (
          <ul>
            {sorted.map((f) => (
              <li key={f.url}>
                <strong>{f.title}</strong> — Diretor: {f.director} — Ano: {String(f.release_date).slice(0, 4)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
