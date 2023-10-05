import "../Styles/WhatWeOffer.css";
import OfferGridCard from "./OfferGridCard";
import Icons from "./importsvgs";

const WhatWeOffer = () => {
  const ourOffers = [
    { head: "Planning", icon: Icons.Planning },
    { head: "UI/UX Design", icon: Icons.UIUX },
    { head: "Web Developer", icon: Icons.WebDev },
    { head: "PHP Develop", icon: Icons.PHP },
    { head: "UI Design", icon: Icons.UI },
    { head: "Creativity", icon: Icons.Creativity },
    { head: "Business Analysis", icon: Icons.Business },
    { head: "Data Science", icon: Icons.DataScience },
  ];

  return (
    <div className="WhatWeOffer">
      <h3 className="Weoffer">We Offer</h3>
      <h2 className="Howcanwehelp">How can we help you?</h2>

      <div className="OfferGrid">
        {ourOffers.map((item) => (
          <OfferGridCard key={item.head} head={item.head} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
