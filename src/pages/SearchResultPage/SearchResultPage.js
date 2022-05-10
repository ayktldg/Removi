import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import layout from "../../style/Layout.module.css";

const SearchResultPage = () => {
  let searchQuery = useLocation().state.query;

  const { data, isLoading, error, getMovieBySearch } = useContext(MovieContext);

  useEffect(() => {
    getMovieBySearch(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div className={layout.container}>
        <Searchbar />
        <h2>Search Results</h2>
        {isLoading ? (
          <p>Loading</p>
        ) : !error ? (
          <MovieList movies={data} />
        ) : (
          <h3>{error}</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultPage;
