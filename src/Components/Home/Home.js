import React from "react";
import Social from "../../Util/Social";
import Header from "../Header/Banner";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Service from "../Pages/Service/Service";
import Tattoo from "../Pages/Tattoo/Tattoo";
import TopStories from "../Pages/TopStories/TopStories";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <About />
      <Service />
      <Tattoo />
      <TopStories/>
      <Contact />
      <div className="fixed top-2/4 z-[1000] hidden lg:block right-0 -translate-y-2/4">
        <Social />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
