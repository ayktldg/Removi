import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoviesByFeature from "./pages/MoviesByFeature/MoviesByFeature";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import Watchlist from "./pages/Watchlist/Watchlist";
import { MovieProvider } from "./context/MovieContext";
import { UserProvider } from "./context/UserContext";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top_rated" element={<MoviesByFeature />} />
            <Route path="/now_playing" element={<MoviesByFeature />} />
            <Route path="/upcoming" element={<MoviesByFeature />} />
            <Route path="/movie_detail/:movieId" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route
              path="/search/movie/:searchKeyword"
              element={<SearchResultPage />}
            />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </UserProvider>
  );
}

export default App;
