import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import layout from "../../style/Layout.module.css";

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
