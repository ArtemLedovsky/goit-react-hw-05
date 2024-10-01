import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMoviesByQuery } from "../../services/api";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return setMovies([]);
    }
    const getData = async () => {
      try {
        setIsOpen(true);
        const response = await fetchMoviesByQuery(query);
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsOpen(false);
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
      {isOpen && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
