const MovieDetails = ({ movie }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        height="100"
      />
      <div>
        <h2>{movie.original_title}</h2>
        <p>Rating: {movie.vote_average}/10</p>
        <p>Overview: {movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
