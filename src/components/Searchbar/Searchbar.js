import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import API from "../../utils/api";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  let navigate = useNavigate();

  const handleSearchMovie = useMemo(
    () =>
      debounce((e) => {
        if (e) {
          navigate(`/${API.SEARCH}${API.MOVIE}/${e}`, { state: { query: e } });
        }
      }, 800),
    []
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleSearchMovie(e.target.value)}
        className={styles.searchbar}
        placeholder="Enter movie name.."
      />
    </div>
  );
};

export default Searchbar;
