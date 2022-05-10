import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import MovieList from "../../components/MovieList/MovieList";

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
        <MovieList movies={data} />
      ) : (
        <h3>{error}</h3>
      )}
      <Footer />
    </div>
  );
};

export default MoviesByFeature;
