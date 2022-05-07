import useToggle from "../../hooks/useToggle";
import { Link } from "react-router-dom";
import layout from "../../style/Layout.module.css";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useToggle();

  return (
    <header
      className={`${navbarStyle.header} ${
        isMenuOpen ? navbarStyle.toggleHeader : ""
      }`}
    >
      <div className={layout.container}>
        <div className={navbarStyle.wrapper}>
          <div>
            <Link to="/" className={navbarStyle.logo}>
              REMOVI
            </Link>
          </div>
          <nav
            className={`${navbarStyle.nav} ${
              isMenuOpen ? navbarStyle.toggleNav : ""
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/top_rated">Top Rated</Link>
            <Link to="/now_playing">Now Playing</Link>
            <Link to="/upcoming">Upcoming</Link>
          </nav>
          <button onClick={setIsMenuOpen} className={navbarStyle.toggleBtn}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
