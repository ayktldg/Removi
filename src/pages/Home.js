import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const {
    data: movies,
    isLoading,
    error,
    pageTitle,
  } = useFetch("movie/popular");

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

export default Home;
