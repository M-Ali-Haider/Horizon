import "../Styles/WhatWeOffer.css";
import OfferGridCard from "./OfferGridCard";
import Icons from "./importsvgs";

const WhatWeOffer = () => {
  const ourOffers = [
    { head: "Planning", icon: Icons.Planning ,descr:"Our meticulous planning process ensures your project starts on the right path. We analyze your requirements, strategize the workflow, and outline a roadmap for seamless execution."},
    { head: "UI/UX Design", icon: Icons.UIUX, descr:"Immerse your audience in visually appealing and user-friendly interfaces. Our skilled designers blend creativity with functionality, crafting designs that enhance user experience and leave a lasting impression." },
    { head: "Web Developer", icon: Icons.WebDev, descr:"Transforming concepts into fully functional websites is our expertise. Our web developers use cutting-edge technologies to build robust, scalable, and secure websites tailored to your specific needs." },
    { head: "PHP Develop", icon: Icons.PHP, descr:"Harness the power of PHP with our expert developers. We create dynamic and interactive websites, utilizing PHP's versatility to deliver tailored solutions, robust databases, and seamless user experiences." },
    { head: "React", icon: Icons.UI, descr:"Elevate your web applications with React.js development. Our proficient developers leverage this powerful library to create dynamic and responsive user interfaces, ensuring smooth interactions and engaging user experiences." },
    { head: "Creativity", icon: Icons.Creativity, descr:"Unleashing creativity in every project, we craft unique and innovative solutions. From visually striking designs to inventive problem-solving, our creative team adds a touch of originality to every aspect of your project." },
    { head: "Responsiveness", icon: Icons.Business, descr:"Your website should look and function flawlessly across all devices. We prioritize responsiveness, ensuring your site adapts seamlessly to various screen sizes, providing users with an optimal experience on desktops, tablets, and smartphones." },
    { head: "Data Science", icon: Icons.DataScience, descr:"Dive into the world of data-driven insights with our data science expertise. We employ advanced analytics, machine learning, and AI algorithms to extract valuable information from your data, empowering you to make informed decisions and gain a competitive edge." },
  ];

  return (
    <div className="WhatWeOffer">
      <h3 className="Weoffer">We Offer</h3>
      <h2 className="Howcanwehelp">How can we help you?</h2>

      <div className="OfferGrid">
        {ourOffers.map((item) => (
          <OfferGridCard key={item.head} head={item.head} icon={item.icon} descr={item.descr} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
