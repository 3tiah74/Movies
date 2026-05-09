import React from "react";
import NavbarMain from "../../layouts/LayoutUser/NavBar";
import HeroSection from "../../components/componentsUser/HeroSection";
import Trending from "../../components/componentsUser/Trending";
import NewMovies from "../../components/componentsUser/NewMovies";

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