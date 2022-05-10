import styles from "./MovieCard.module.css";
import API from "../../utils/api";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie_detail/${movie.id}`}>
      <li className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={`${API.IMAGE_URL}${movie.poster_path}`}
            className={styles.image}
            alt={movie.title}
          />
        </div>
        <div className={styles.body}>
          <span className={styles.rank}>{movie.vote_average}</span>
          <h5 className={styles.title}>{movie.title}</h5>
          <small className={styles.releaseDate}>{movie.release_date}</small>
        </div>
      </li>
    </Link>
  );
};

export default MovieCard;
