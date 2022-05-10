import useToggle from "../../hooks/useToggle";
import { Link } from "react-router-dom";
import layout from "../../style/Layout.module.css";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggle();

  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.toggleHeader : ""}`}
    >
      <div className={layout.container}>
        <div className={styles.wrapper}>
          <div>
            <Link to="/" className={styles.logo}>
              REMOVI
            </Link>
          </div>
          <nav
            className={`${styles.nav} ${isMenuOpen ? styles.toggleNav : ""}`}
          >
            <Link to="/">Home</Link>
            <Link to="/top_rated">Top Rated</Link>
            <Link to="/now_playing">Now Playing</Link>
            <Link to="/upcoming">Upcoming</Link>
          </nav>
          <button onClick={setIsMenuOpen} className={styles.toggleBtn}>
            <FontAwesomeIcon className={styles.icon} icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
