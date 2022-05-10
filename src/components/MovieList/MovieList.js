import layout from "../../style/Layout.module.css";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ul className={`${layout.grid} ${styles.list}`}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
