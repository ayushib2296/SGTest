import React, { useState } from "react";
import CommunitySection from "../components/CommunitySection";
import LandingSection from "../components/LandingSection";
import LocationSection from "../components/LocationSection";
import Navbar from "../components/Navbar";
import OurMenuSection from "../components/OurMenuSection";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingSection />
      <CommunitySection />
      <LocationSection />
      <OurMenuSection />
   
    </div>
  );
};

export default Home;
