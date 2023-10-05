import "../Styles/OurGoal.css";

const OurGoal = () => {
  return (
    <div className="OurGoals">
      <div className="ourgoalbox">
        <div className="ImgOurGoals">
          <div className="ourgoalimg12">
            <div className="ourgoal1"></div>
            <div className="ourgoal2"></div>
          </div>
          <div className="ourgoal3"></div>
        </div>
        <div className="TextOurGoal">
          <p className="OurGoalp">OUR GOAL</p>
          <h1 className="ToUpscaleh2">
            To Upscale your Business to the Next Level
          </h1>
          <p className="ourgoaltextp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia itaque
            officiis, illo in consequuntur laboriosam dicta molestias?
            Voluptates magni magnam natus voluptatum, eos neque, ea optio non
            atque ipsam laborum?
          </p>
          <div className="OurGoalicons">
            <div className="OurGoaliconscard">
              <div className="goalicon"></div>
              <div className="goalicontext">
                <h3>Authenticity</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
            <div className="OurGoaliconscard">
              <div className="goalicon"></div>
              <div className="goalicontext">
                <h3>Pro Support</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
              </div>
            </div>
          </div>
          <div className="GetStartedbtn" id="LearnMorebtn">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
