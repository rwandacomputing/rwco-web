import React from "react";
import Hero from "@/components/page-components/Hero";
import Navbar from "@/components/page-components/Navbar";
import Features from "@/components/page-components/Eligibility";
import Footer from "@/components/page-components/Footer";
import Team from "@/components/page-components/Sponsors";
import Coaches from "@/components/page-components/Team";
import Resources from "@/components/page-components/Resources";
import RoadMap from "@/components/page-components/RoadMap";
import Mission from "@/components/page-components/Mission";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <RoadMap />
      <Coaches />
      <Resources />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
