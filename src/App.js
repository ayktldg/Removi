import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesByFeature from "./pages/MoviesByFeature";
import SearchResultPage from "./pages/SearchResultPage";
import { ToggleMenuProvider } from "./context/ToggleMenuContext";

function App() {
  return (
    <ToggleMenuProvider>
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
    </ToggleMenuProvider>
  );
}

export default App;
