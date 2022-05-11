import CastCard from "../CastCard/CastCard";
import layout from "./../../style/Layout.module.css";
import styles from "./CardList.module.css";

const CastList = ({ cast }) => {
  return (
    <div className={layout.container}>
      <h2 className={styles.title}>Cast</h2>
      <ul className={layout.grid}>
        {cast.map((person) => (
          <CastCard person={person} key={person.id} />
        ))}
      </ul>
    </div>
  );
};

export default CastList;
