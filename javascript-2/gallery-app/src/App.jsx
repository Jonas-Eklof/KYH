import "./index.css";
import Gallery from "./components/gallery/Gallery.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center py-6">Photo Gallery</h1>
      <Gallery />
    </div>
  );
}

export default App;
