import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchReviewsById(movieId);
        setMovie(response.data.results);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movie.map((item) => (
          <li key={item.id}>
            <h4>Author: {item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
