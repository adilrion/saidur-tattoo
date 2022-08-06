import React from "react";
import Header from "../Header/Header";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Service from "../Pages/Service/Service";
import Tattoo from "../Pages/Tattoo/Tattoo";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Header />
      <About />
      <Service />

      <Tattoo />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;