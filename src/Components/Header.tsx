import "../Styles/Header.css";
const Header = () => {
  return (
    <div className="Header">
      <p className="Logo">Horizon</p>

      <div className="Links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li
            onClick={() => {
              const [ele] = document.getElementsByClassName("OurWork");
              ele.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li>Blog</li>
        </ul>
        <div className="FOR-AJUSTMENT-PURPOUSE"></div>
        <div className="Contactus">Contact us</div>
      </div>
    </div>
  );
};

export default Header;
