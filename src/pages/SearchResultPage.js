import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";
import Footer from "../components/Footer/Footer";
import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import Searchbar from "../components/Searchbar/Searchbar";
import { useLocation } from "react-router-dom";

const SearchResultPage = () => {
  let searchQuery = useLocation().state.query;

  const { data, isLoading, error, getMovieBySearch } = useContext(MovieContext);

  useEffect(() => {
    getMovieBySearch(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <h2>Search Results</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : !error ? (
        data.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      ) : (
        <h3>{error}</h3>
      )}
      <Footer />
    </div>
  );
};

export default SearchResultPage;
