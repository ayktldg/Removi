import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import Searchbar from "../../components/Searchbar/Searchbar";
import Footer from "../../components/Footer/Footer";
import MovieList from "../../components/MovieList/MovieList";
import layout from "../../style/Layout.module.css";

const Home = () => {
  const { data, isLoading, error, pageTitle, getMovieByFeature } =
    useContext(MovieContext);

  useEffect(() => {
    getMovieByFeature("/popular");
  }, []);

  return (
    <div>
      <Navbar />
      <main className={layout.container}>
        <Searchbar />
        <h2>{pageTitle}</h2>
        {isLoading ? (
          <p>Loading</p>
        ) : !error ? (
          <MovieList movies={data} />
        ) : (
          <h3>{error}</h3>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
