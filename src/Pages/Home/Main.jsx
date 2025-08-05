import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";
import Feature from "./Feature";
import CounterStats from "./CounterStats";
import Snapvideo from "./Snapvideo";  // <-- Import added
import AppPromo from "./AppPromo";    // <-- Import added
import Features from "./Features";

const Main = ({ theme }) => {
  return (
    <>
    <div className="mt-7">

    </div>
      <Banner theme={theme} />
      <Hero theme={theme} />
      <WhyChooseUs theme={theme} />
      <Snapvideo theme={theme} />
      <AppPromo theme={theme} />
      <Features theme={theme}/>
      <Feature theme={theme} />
      <CounterStats theme={theme} />
    </>
  );
};

export default Main;
