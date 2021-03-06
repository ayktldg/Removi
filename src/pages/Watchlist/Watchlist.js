import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import Footer from "../../components/Footer/Footer";
import styles from "./Watchlist.module.css";
import layout from "../../style/Layout.module.css";

const Watchlist = () => {
  const { currentUser } = useContext(UserContext);
  const movies = currentUser.favorites;

  return (
    <div>
      <Navbar />
      <div className={`${layout.container} ${styles.page}`}>
        <h2>Watchlist</h2>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <h3>The is no movie in the watchlist!</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Watchlist;
