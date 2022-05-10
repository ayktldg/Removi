import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoviesByFeature from "./pages/MoviesByFeature/MoviesByFeature";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import { MovieProvider } from "./context/MovieContext";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top_rated" element={<MoviesByFeature />} />
          <Route path="/now_playing" element={<MoviesByFeature />} />
          <Route path="/upcoming" element={<MoviesByFeature />} />
          <Route path="/movie_detail/:movieId" element={<MovieDetail />} />
          <Route
            path="/search/movie/:searchKeyword"
            element={<SearchResultPage />}
          />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
