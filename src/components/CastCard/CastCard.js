import API from "../../utils/api";
import styles from "./CastCard.module.css";

const CastCard = ({ person }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={
            person.profile_path
              ? `${API.IMAGE_URL}${person.profile_path}`
              : "https://www.maxpixel.net/static/photo/640/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png"
          }
          className={styles.image}
          alt={person.title}
        />
      </div>
      <div className={styles.body}>
        <h5 className={styles.name}>{person.name}</h5>
        <span className={styles.character}>{person.character}</span>
      </div>
    </li>
  );
};

export default CastCard;
