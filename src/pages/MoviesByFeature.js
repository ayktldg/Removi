import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";

const MoviesByFeature = () => {
  const endpoint = useLocation().pathname;

  const { data, isLoading, error, pageTitle, getMovieByFeature } =
    useContext(MovieContext);

  useEffect(() => {
    getMovieByFeature(endpoint);
  }, [endpoint]);

  return (
    <div>
      <Navbar />
      <h2>{pageTitle}</h2>
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

export default MoviesByFeature;
