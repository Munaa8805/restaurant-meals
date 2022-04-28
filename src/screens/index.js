import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/SideBar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer";
import AllLogo from "../components/Logos/AllLogo";
import Testimonials from "../components/Testimonials/Testimonials";
import AllRecipe from "../components/AllRecipe/AllRecipe";
import Price from "../components/Price/Price";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AllLogo />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <AllRecipe />
      <Testimonials />
      <Price />
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
