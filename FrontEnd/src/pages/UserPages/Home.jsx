import React from "react";
import HeroSection from "../../components/componentsUser/HeroSection";
import Trending from "../../components/componentsUser/Trending";
import NewMovies from "../../components/componentsUser/NewMovies";

function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Trending />
      <NewMovies />
    </div>
  );
}

export default Home;