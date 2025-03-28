import "./css/App.css";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Route, Routes, Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
          <Routes>
            <Route path="/movie-app" element={<Home />} />
            <Route path="/movie-app/favorites" element={<Favorites />} />
          </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
