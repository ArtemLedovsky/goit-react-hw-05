import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMoviesByQuery } from "../../services/api";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return setMovies([]);
    }
    const getData = async () => {
      try {
        const response = await fetchMoviesByQuery(query);
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [query]);

  const handleSetSearchQuery = (value) => {
    // setQuery(value);
    if (!value) {
      return setSearchParams({});
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div className={s.wrapper}>
      <SearchBar handleSetSearchQuery={handleSetSearchQuery} plchldr={query} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
