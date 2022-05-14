import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import UserContext from "../../context/UserContext";
import { useParams } from "react-router-dom";
import API from "../../utils/api";
import styles from "./MovieDetail.module.css";
import layout from "../../style/Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CastList from "../../components/CastList/CastList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlay } from "@fortawesome/free-solid-svg-icons";
import MovieFrame from "../../components/MovieFrame/MovieFrame";

const MovieDetail = () => {
  const params = useParams();
  const {
    movieDetail,
    cast,
    isLoading,
    isTrailerPlay,
    handleTrailerPlay,
    getMovieDetail,
    getCast,
  } = useContext(MovieContext);

  const { currentUser, handleBookmarks } = useContext(UserContext);

  const isInBookmarks = currentUser.favorites.find(
    (movie) => movie.id === movieDetail.id
  );

  useEffect(() => {
    getMovieDetail(`/${params.movieId}`);
    getCast(`/${params.movieId}`);
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${API.IMAGE_URL}${movieDetail.backdrop_path})`,
          }}
        >
          <div className={styles.backgroundCover}>
            <div className={`${layout.container} ${styles.detailGrid}`}>
              <div className={styles.poster}>
                <img
                  src={`${API.IMAGE_URL}${movieDetail.poster_path}`}
                  alt={movieDetail.title}
                />
              </div>
              <div>
                <h2 className={styles.title}>{movieDetail.title}</h2>
                <ul className={styles.featureList}>
                  <li>
                    <ul className={styles.genreList}>
                      {movieDetail.genres &&
                        movieDetail.genres.map((genre) => (
                          <li className={styles.genreListItem} key={genre.name}>
                            <small>{genre.name}</small>
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li>
                    <small>{movieDetail.release_date}</small>
                  </li>
                  <li>
                    <small>{movieDetail.runtime} min</small>
                  </li>
                </ul>
                <div className={styles.selection}>
                  <div className={styles.rankWrapper}>
                    <span className={styles.rank}>
                      {movieDetail.vote_average}
                    </span>
                    <small className={styles.rankType}>IMDB Rank</small>
                  </div>
                  <div className={styles.icons}>
                    <span
                      className={styles.iconWrapper}
                      onClick={() => handleTrailerPlay(true)}
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faPlay} />
                      <small>Play trailer</small>
                    </span>
                    <span className={styles.iconWrapper}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faBookmark}
                      />
                      <small onClick={() => handleBookmarks(movieDetail)}>
                        {isInBookmarks
                          ? "Remove from watchlist"
                          : "Add to watchlist"}
                      </small>
                    </span>
                  </div>
                </div>
                <p className={styles.tagline}>{movieDetail.tagline}</p>
                <h3>Overview</h3>
                <p>{movieDetail.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading ? <h2>Loading</h2> : <CastList cast={cast} />}
      {isTrailerPlay && <MovieFrame path={movieDetail.videos.results[0].key} />}
    </>
  );
};

export default MovieDetail;
