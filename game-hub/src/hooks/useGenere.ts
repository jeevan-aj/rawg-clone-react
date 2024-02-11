import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id:number;
    name:string
}

interface FetchGenreRespone {
    count:number;
    results:Genre[];

}

const useGenere = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreRespone>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { error, genre, loading };
};

export default useGenere;
