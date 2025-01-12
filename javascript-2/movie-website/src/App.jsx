import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <MovieCard movie={{ title: "Saw", release_date: "2022" }} />
    </>
  );
}

export default App;
