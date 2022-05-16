import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import MovieList from "../../components/MovieList/MovieList";
import Footer from "../../components/Footer/Footer";
import styles from "./SearchResultPage.module.css";
import layout from "../../style/Layout.module.css";

const SearchResultPage = () => {
  const { movies, isLoading, error, getMovieBySearch } =
    useContext(MovieContext);
  let searchQuery = useLocation().state.query;

  useEffect(() => {
    getMovieBySearch(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div className={`${layout.container} ${styles.page}`}>
        <Searchbar />
        <h2>Search Results</h2>
        {isLoading ? (
          <p>Loading</p>
        ) : !error ? (
          <MovieList movies={movies} />
        ) : (
          <h3>{error}</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultPage;
