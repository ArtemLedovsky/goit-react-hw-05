import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id} className={s.item}>
            <Link to={item.id.toString()} state={location} className={s.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
