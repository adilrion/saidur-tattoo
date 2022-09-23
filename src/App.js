import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Tattoo from "./Components/Pages/Tattoo/Tattoo";
import Contact from "./Components/Pages/Contact/Contact";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Stories from "./Components/Pages/TopStories/Stories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tattoo" element={<Tattoo />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="stories" element={<Stories />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
