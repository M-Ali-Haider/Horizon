import "../Styles/OfferCard.css";

const OfferGridCard = (props: { head: string; icon: any }) => {
  return (
    <div className="cardItem">
      <div className="imgCard" style={{}}>
        <img src={props.icon} alt="" loading="lazy" />
      </div>
      <h4 className="CardHead">{props.head}</h4>
      <p className="CardText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repel
      </p>
    </div>
  );
};

export default OfferGridCard;
