import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

function Home() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Hero />
      <Technologies />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default Home;