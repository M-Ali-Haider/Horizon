import "../Styles/OurWork.css";
import BigCard from "./BigCard";
import WorldNews from "../assets/WorldNews.webp";
import OnlineShop from "../assets/OnlineShop.webp";
import background3 from "../assets/background3.webp";

const OurWork = () => {
  let ourworkarray = [
    {
      ProjectName: "World News",
      ProjectInfo:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, tempor invidunt ut labore et dolore.",
      LaunchedIn: "October 2022",
      Developed: "PHP, Laravel",
      Category: "Ecommerce",
      Visit: "worldnewsonline.com",
      img: WorldNews,
    },
    {
      ProjectName: "Online Shop",
      ProjectInfo:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, tempor invidunt ut labore et dolore.",
      LaunchedIn: "October 2022",
      Developed: "PHP, Laravel",
      Category: "Ecommerce",
      Visit: "linkinparkonline.com",
      img: OnlineShop,
    },
    {
      ProjectName: "World News",
      ProjectInfo:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, tempor invidunt ut labore et dolore.",
      LaunchedIn: "October 2022",
      Developed: "PHP, Laravel",
      Category: "Ecommerce",
      Visit: "worldnewsonline.com",
      img: WorldNews,
    },
    {
      ProjectName: "Online Shop",
      ProjectInfo:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, tempor invidunt ut labore et dolore.",
      LaunchedIn: "October 2022",
      Developed: "PHP, Laravel",
      Category: "Ecommerce",
      Visit: "linkinparkonline.com",
      img: OnlineShop,
    },
  ];

  return (
    <div className="OurWork">
      <img src={background3} alt="" className="background3" />
      <div className="OurWorkText">
        <h2 className="OurWorkPride">Our Work, Our Pride</h2>
        <p className="OurWorkPridetext">
          Each project we undertake becomes a testament to our passion and expertise. Explore our portfolio to witness the innovative solutions, stunning designs, and seamless experiences that define our commitment to excellence. We take immense pride in every project we deliver, reflecting our unwavering dedication to quality and client satisfaction.
        </p>
      </div>
      <div className="BigCardList">
        {ourworkarray.map((item, index) => (
          <BigCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
