import { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleMenuContext from "../context/ToggleMenuContext";
import layout from "../style/Layout.module.css";
import navbarStyle from "../style/Navbar.module.css";

const Navbar = () => {
  const { isMenuOpen, onclickToggleMenu } = useContext(ToggleMenuContext);
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
          <div
            className={`${navbarStyle.nav} ${
              isMenuOpen ? navbarStyle.toggleNav : ""
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/top-rated">Top Rated</Link>
            <Link to="/now-playing">Now Playing</Link>
            <Link to="/upcoming">Upcoming</Link>
          </div>
          <button
            onClick={() => onclickToggleMenu()}
            className={navbarStyle.toggleBtn}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
