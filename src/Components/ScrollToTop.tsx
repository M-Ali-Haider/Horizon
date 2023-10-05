import "../Styles/ScrollToTop.css";
import uparrow from "../assets/Icons/up-arrow-icon.svg";

const ScrollToTop = (props: { visible: boolean }) => {
  let show = props.visible ? "scale(1)" : "scale(0)";
  var buttonStyle = {
    transform: show,
  };

  function handleClickToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className="scrolltotopbtn"
      onClick={handleClickToTop}
      style={buttonStyle}
    >
      <img src={uparrow} alt="" />
    </button>
  );
};

export default ScrollToTop;
