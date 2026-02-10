import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";
import Page from "./pages/page";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
