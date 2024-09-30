import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import MovieDetailsApp from "../../components/MovieDetailsApp/MovieDetailsApp";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state);
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <Link to={goBackRef.current ?? "/movies"}>Go back</Link>
      <MovieDetailsApp movie={movie} />
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Rewiews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
