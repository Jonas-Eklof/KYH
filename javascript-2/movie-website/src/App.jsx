import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
