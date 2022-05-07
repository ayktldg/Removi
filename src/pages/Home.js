import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";
import { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import Searchbar from "../components/Searchbar/Searchbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { data, isLoading, error, pageTitle, getMovieByFeature } =
    useContext(MovieContext);

  useEffect(() => {
    getMovieByFeature("/popular");
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
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

export default Home;
