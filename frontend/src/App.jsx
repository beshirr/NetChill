import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourits";
import NavBar from "./components/NavBar";
import './css/global.css';

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
