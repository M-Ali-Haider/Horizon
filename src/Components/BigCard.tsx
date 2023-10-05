import "../Styles/BigCard.css";

const BigCard = (props: {
  ProjectName: any;
  ProjectInfo: any;
  LaunchedIn: any;
  Developed: any;
  Category: any;
  Visit: any;
  img: any;
}) => {
  return (
    <div className="BigCard">
      <div className="BigCardImageFlex">
        <h2 className="ProjectNameBigCard">{props.ProjectName}</h2>
        <p className="projectinfo">{props.ProjectInfo}</p>

        <div className="BigCardflex">
          <div>
            <h4>Launched In</h4>
            <p>{props.LaunchedIn}</p>
          </div>
          <div>
            <h4>Developed Using</h4>
            <p>{props.Developed}</p>
          </div>
          <div>
            <h4>Category</h4>
            <p>{props.Category}</p>
          </div>
        </div>
        <div className="Visit">
          <h4>Visit</h4>
          <p className="Link">{props.Visit}</p>
        </div>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
};

export default BigCard;
