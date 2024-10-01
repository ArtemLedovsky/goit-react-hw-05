import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from "./MovieCast.module.css";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCastById(movieId);
        setMovie(response.data.cast);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {movie.map((item) => (
          <li key={item.id} className={s.item}>
            <img
              // src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : defaultImg
              }
              alt="img"
              className={s.image}
            />
            <h4>{item.name}</h4>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
