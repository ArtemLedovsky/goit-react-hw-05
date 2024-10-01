import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

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
  if (!movie.genres) {
    return;
  }

  return (
    <div className={s.mainWrap}>
      <Link to={goBackRef.current ?? "/movies"} className={s.goBackBtn}>
        🡠Back
      </Link>
      <div className={s.filmWrap}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          className={s.image}
        />
        <div className={s.textWrap}>
          <h2>{movie.title}</h2>
          <p>
            <b>Release date:</b> {movie.release_date}{" "}
          </p>
          <p>
            <b>Rating:</b> {movie.vote_average.toFixed(1)}/10
          </p>
          <p>
            <b>Overview:</b> {movie.overview}
          </p>
          <p>
            <b>Genres:</b>
            {movie.genres.map((genre) => {
              return ` ${genre.name}`;
            })}
          </p>
        </div>
      </div>
      <hr />
      <div className={s.linksWrap}>
        <h3>Additional information</h3>
        <NavLink to="cast" className={s.subpageLink}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={s.subpageLink}>
          Reviews
        </NavLink>
      </div>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
