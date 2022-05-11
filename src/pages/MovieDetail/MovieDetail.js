import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import { useParams } from "react-router-dom";
import API from "../../utils/api";
import styles from "./MovieDetail.module.css";
import layout from "../../style/Layout.module.css";

const MovieDetail = () => {
  const params = useParams();
  const { data, getMovieDetail } = useContext(MovieContext);

  console.log("detail param: ", params.movieId);

  useEffect(() => {
    getMovieDetail(`/${params.movieId}`);
  }, []);

  return (
    <>
      {!data ? (
        <h2>Loading</h2>
      ) : (
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${API.IMAGE_URL}${data.backdrop_path})`,
          }}
        >
          <div className={styles.backgroundCover}>
            <div className={`${layout.container} ${styles.detailGrid}`}>
              <div className={styles.poster}>
                <img
                  src={`${API.IMAGE_URL}${data.poster_path}`}
                  alt={data.title}
                />
              </div>
              <div>
                <h2 className={styles.title}>{data.title}</h2>
                <ul className={styles.featureList}>
                  <li>
                    <small>{data.release_date}</small>
                  </li>
                  <li>
                    <ul className={styles.genreList}>
                      {data.genres.map((genre) => (
                        <li className={styles.genreListItem} key={genre.name}>
                          <small>{genre.name}</small>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <small>{data.runtime} min</small>
                  </li>
                </ul>
                <div className={styles.selection}>
                  <div className={styles.rankWrapper}>
                    <span className={styles.rank}>{data.vote_average}</span>
                    <small className={styles.rankType}>IMDB Rank</small>
                  </div>
                  <div className="buttons ml-5 d-flex align-items-center">
                    <span
                      className="play ml-4 text-white"
                      onClick={() => console.log("hello")}
                    >
                      {/*  <svg className="icon icon-play3">
                  <use xlink:href="#icon-play3" />
                </svg>
                <symbol id="icon-play3" viewBox="0 0 32 32">
                  <path d="M6 4l20 12-20 12z"></path>
                </symbol> */}
                      Play trailer
                    </span>
                    {/*  <BaseBookmarkButton :data="data" className="ml-4" v-if="isLogin" /> */}
                  </div>
                </div>
                <h5 className="font-weight-light font-italic mt-4">
                  {data.tagline}
                </h5>
                <h3 className="font-weight-bold mt-4">Overview</h3>
                <p className="card-text">{data.overview}</p>
              </div>
            </div>
          </div>
          {/*  <div class="cast container mt-5">
  <h2 class="cast-title text-center">Cast</h2>
  <div class="cast-list d-flex flex-wrap mt-3 justify-content-center">
    <CastProfileCard v-for="actor in cast" :key="actor.id" :actor="actor" />
  </div>
</div> */}
          {/*  <dataTrailerFrame :movie="movieDetail" v-if="trailerIsShowing" /> */}
        </div>
      )}
    </>
  );
};

export default MovieDetail;
