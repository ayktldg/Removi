import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import styles from "./MovieFrame.module.css";
import API from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const MovieFrame = ({ path }) => {
  const { handleTrailerPlay } = useContext(MovieContext);
  return (
    <div className={styles.videoWrapper}>
      <div>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faRectangleXmark}
          onClick={() => handleTrailerPlay(false)}
        />
      </div>
      <iframe
        title="video"
        src={`${API.TRAILER_URL}${path}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieFrame;
