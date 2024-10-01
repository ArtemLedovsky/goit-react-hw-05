import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id} className={s.item}>
            <Link
              to={`/movies/${item.id.toString()}`}
              state={location}
              className={s.link}
            >
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : defaultImg
                }
                alt={item.title}
                className={s.image}
              />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
