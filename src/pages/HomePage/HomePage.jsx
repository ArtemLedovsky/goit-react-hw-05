import { useEffect, useState } from "react";
import { fetchTrends } from "../../services/api";
import s from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTrends();
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Trends today</h2>
      <hr />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
