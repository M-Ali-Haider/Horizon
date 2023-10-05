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
            We are dedicated to elevating your business to new heights. Our goal is to provide you with innovative solutions and strategic insights that empower your brand, expand your reach, and maximize your potential for success.
          </p>
          <div className="OurGoalicons">
            <div className="OurGoaliconscard">
              <div className="goalicon"></div>
              <div className="goalicontext">
                <h3>Authenticity</h3>
                <p>We value the genuine essence of your brand. Our focus is on creating authentic experiences for your audience. From design elements to communication strategies, we ensure that your brand's unique identity shines through, fostering genuine connections with your customers.</p>
              </div>
            </div>
            <div className="OurGoaliconscard">
              <div className="goalicon"></div>
              <div className="goalicontext">
                <h3>Pro Support</h3>
                <p>Count on us for professional and dedicated support throughout your journey. Our team of experts is here to assist you at every step, providing proactive solutions, expert guidance, and timely assistance. Your success is our priority, and our proactive support ensures you're always in capable hands.</p>
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
