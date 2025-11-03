// Hook genérico de paginação para SWAPI usando Axios.
// Usa AbortController (Axios suporta signal nativamente).

import { useEffect, useState } from 'react';
import { http } from '../lib/http';

export default function useSwapiPage(path, page) {
  const [data, setData] = useState(null);     // objeto retornado pela SWAPI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    async function fetchPage() {
      try {
        setLoading(true);
        setError(null);

        // GET /people?page=1  (ou /planets?page=2, etc.)
        const res = await http.get(path, {
          params: { page },
          signal: ctrl.signal, // permite cancelar se desmontar
        });

        setData(res.data);
      } catch (err) {
        // Ignora cancelamento
        if (err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
    return () => ctrl.abort();
  }, [path, page]);

  return {
    data,
    loading,
    error,
    hasNext: Boolean(data?.next),
    hasPrev: Boolean(data?.previous),
  };
}
