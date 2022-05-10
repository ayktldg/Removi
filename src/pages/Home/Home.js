import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import MovieContext from "../../context/MovieContext";
import Searchbar from "../../components/Searchbar/Searchbar";
import Footer from "../../components/Footer/Footer";
import MovieList from "../../components/MovieList/MovieList";
import layout from "../../style/Layout.module.css";
import styles from "./Home.module.css";

const Home = () => {
  const { data, isLoading, error, pageTitle, getMovieByFeature } =
    useContext(MovieContext);

  useEffect(() => {
    getMovieByFeature("/popular");
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <div className={layout.container}>
          <h1 className={styles.heroTitle}>Welcome.</h1>
          <h3 className={styles.description}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <Searchbar />
        </div>
      </div>
      <div className={layout.container}>
        <h2>{pageTitle}</h2>
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

export default Home;
