import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import Searchbar from "../components/Searchbar";
import { useLocation } from "react-router-dom";

const SearchResultPage = () => {
  let location = useLocation();

  const {
    data: movies,
    isLoading,
    error,
    pageTitle,
  } = useFetch("search/movie", location.state.query);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <h2>{pageTitle}</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : !error ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      ) : (
        <h3>{error}</h3>
      )}
    </div>
  );
};

export default SearchResultPage;
