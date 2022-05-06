import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

const MovieListPage = () => {
  const pathName = useLocation().pathname;
  const { data: movies, isLoading, error, pageTitle } = useFetch(pathName);

  return (
    <div>
      <Navbar />
      <h2>{pageTitle}</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : !error ? (
        movies.map((movie) => <MovieCard movie={movie} />)
      ) : (
        <h3>{error}</h3>
      )}
    </div>
  );
};

export default MovieListPage;
