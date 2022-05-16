import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import Footer from "../../components/Footer/Footer";
import layout from "../../style/Layout.module.css";

const MoviesByFeature = () => {
  const { movies, isLoading, error, pageTitle, getMovieByFeature } =
    useContext(MovieContext);
  const endpoint = useLocation().pathname;

  useEffect(() => {
    getMovieByFeature(endpoint);
  }, [endpoint]);

  return (
    <div>
      <Navbar />
      <div className={layout.container}>
        <h2>{pageTitle}</h2>
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

export default MoviesByFeature;
