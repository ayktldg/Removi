import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieListPage from "./pages/MovieListPage";
import { ToggleMenuProvider } from "./context/ToggleMenuContext";

function App() {
  return (
    <ToggleMenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="top_rated" element={<MovieListPage />} />
          <Route path="now_playing" element={<MovieListPage />} />
          <Route path="upcoming" element={<MovieListPage />} />
        </Routes>
      </BrowserRouter>
    </ToggleMenuProvider>
  );
}

export default App;
