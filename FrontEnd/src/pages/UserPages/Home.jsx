import React from "react";
import NavbarMain from "../LayoutUser/NavBar";
import HeroSection from "../componentsUser/HeroSection";
import Trending from "../componentsUser/Trending";
import NewMovies from "../componentsUser/NewMovies";

function Home() {
  return (
    <div className="bg-black">
      <NavbarMain />
      <HeroSection />
      <Trending />
      <NewMovies />
    </div>
  );
}

export default Home;