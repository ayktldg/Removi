const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <p>{movie.original_title}</p>
    </div>
  );
};

export default MovieCard;
