import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
