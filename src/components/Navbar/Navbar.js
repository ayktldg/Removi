import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import styles from "./Navbar.module.css";
import layout from "../../style/Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useToggle();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoggedIn) {
      logout(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

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
            <div className={styles.pageLinks}>
              <Link to="/">Home</Link>
              <Link to="/top_rated">Top Rated</Link>
              <Link to="/now_playing">Now Playing</Link>
              <Link to="/upcoming">Upcoming</Link>
            </div>
            <div className={styles.userLinks}>
              {isLoggedIn && <Link to="/watchlist">Watchlist</Link>}
              <button className={styles.loginBtn} onClick={() => handleLogin()}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
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
