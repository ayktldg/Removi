import styles from "./MovieCard.module.css";
import API from "../../utils/api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useLocation } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { handleBookmarks } = useContext(UserContext);
  const pathname = useLocation().pathname;

  const handleRemoveBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleBookmarks(movie);
  };

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
          <span className={styles.date}>{movie.release_date}</span>
          {pathname === "/watchlist" && (
            <button onClick={handleRemoveBtn} className={styles.removeBtn}>
              Remove
            </button>
          )}
        </div>
      </li>
    </Link>
  );
};

export default MovieCard;
