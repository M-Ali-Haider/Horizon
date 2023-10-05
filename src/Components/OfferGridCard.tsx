import "../Styles/OfferCard.css";

const OfferGridCard = (props: { head: string; icon: any; descr:string }) => {
  return (
    <div className="cardItem">
      <div className="imgCard" style={{}}>
        <img src={props.icon} alt="" loading="lazy" />
      </div>
      <h4 className="CardHead">{props.head}</h4>
      <p className="CardText">
        {props.descr}
      </p>
    </div>
  );
};

export default OfferGridCard;
