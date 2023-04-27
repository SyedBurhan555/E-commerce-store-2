import React from "react";
import Companies from "../../Component/Companies";
import FeatureService from "../../Component/FeatureService";
import ServiceSection from "../../Component/ServiceSection";
import WelcomeSection from "../../Component/welcomeSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection title="Burhan Store"/>
      <FeatureService />
      <ServiceSection />
      <Companies />
    </div>
  );
};

export default Home;
