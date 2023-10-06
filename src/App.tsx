import { Fragment, useState } from "react";
import Header from "./Components/Header";
import MainPageWel from "./Components/MainPageWel";
import "./Styles/App.css";
import htmlphp from "./assets/htmlphp.webp";
import WhatWeOffer from "./Components/WhatWeOffer";
import OurGoal from "./Components/OurGoal";
import OurWork from "./Components/OurWork";
import Footer from "./Components/Footer";
import GetStartedNow from "./Components/GetStartedNow";
import WhyChooseUs from "./Components/WhyChooseUs";
import ScrollToTop from "./Components/ScrollToTop";
import ThreeDModel from "./Components/ThreeD";

const App = () => {
  const [buttonvisible, Setbuttonvisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 * 30) {
      Setbuttonvisible(true);
    } else {
      Setbuttonvisible(false);
    }
  });
  return (
    <Fragment>
      <div className="mainbody">
        <Header />
        <div className="mainPagewelc">
          <MainPageWel />
          <ThreeDModel />
          <img className="htmlphp" src={htmlphp} alt="" />
        </div>
      </div>
      <WhatWeOffer />
      <OurGoal />
      <OurWork />
      <WhyChooseUs />
      <GetStartedNow />
      <Footer />
      <ScrollToTop visible={buttonvisible} />
    </Fragment>
  );
};

export default App;
