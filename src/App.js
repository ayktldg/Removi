import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesByFeature from "./pages/MoviesByFeature";
import SearchResultPage from "./pages/SearchResultPage";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top_rated" element={<MoviesByFeature />} />
          <Route path="/now_playing" element={<MoviesByFeature />} />
          <Route path="/upcoming" element={<MoviesByFeature />} />
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
