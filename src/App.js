import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import { ToggleMenuProvider } from "./context/ToggleMenuContext";

function App() {
  return (
    <ToggleMenuProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </BrowserRouter>
    </ToggleMenuProvider>
  );
}

export default App;
