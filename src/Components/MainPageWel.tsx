import "../Styles/MainPageWel.css";
import arrow from "../assets/arrow.png";
const MainPageWel = () => {
  return (
    <div className="MainPageWel">
      <p className="Createbeter">Create a better business future with us</p>
      <h1 className="letbuild">
        Let’s build your UI/UX Design, Website together
      </h1>
      <p className="ittakes">
        It takes just a few steps to build and launch your new website. We’ll
        strive to make this process as easy as possible for you.
      </p>
      <div className="btnarrow">
        <div className="GetStartedbtn">Get Started Today</div>
        <img className="arrow" src={arrow} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default MainPageWel;
