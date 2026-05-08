import React from "react";
import NavbarMain from "../componentsUser/NavBar";
import HeroSection from "../componentsUser/HeroSection";
import Trending from "../componentsUser/Trending";
import NewSeries from "../componentsUser/NewSeries";
import NewMovies from "../componentsUser/NewMovies";

function Home() {
  return (
    <div className="bg-black">
      <NavbarMain />
      <HeroSection />
      <Trending />
      <NewSeries />
      <NewMovies />
    </div>
  );
}

export default Home;