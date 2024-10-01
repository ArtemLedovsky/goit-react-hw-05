import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchReviewsById(movieId);
        setMovie(response.data.results);
        console.log(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {movie.length ? (
        <ul className={s.list}>
          {movie.map((item) => (
            <li key={item.id} className={s.item}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
