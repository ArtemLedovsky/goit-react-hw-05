import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

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
    <div>
      <ul>
        {movie.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt="img"
              width="100"
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
