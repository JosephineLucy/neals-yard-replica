import "./Header.css";
import logo from "../../images/logo.png";
import HeaderToolbar from "../HeaderToolbar/HeaderToolbar";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import { headerIcons } from "../../componentData/componentData";
import NavBar from "../NavBar/NavBar";

const Header = ({ selectedCurr, setSelectedCurr, currOpen, setCurrOpen }) => {
  return (
    <nav>
      <HeaderToolbar
        selectedCurr={selectedCurr}
        setSelectedCurr={setSelectedCurr}
        currOpen={currOpen}
        setCurrOpen={setCurrOpen}
      />
      <section className="header-main">
        <section className="header-left">
          <img className="header-logo" src={logo} alt="logo" />
        </section>
        <section className="header-right">
          {headerIcons.map((icon) => {
            return (
              <img
                className="header-icon"
                src={icon.image}
                alt={icon.title}
                key={icon.id}
              />
            );
          })}
        </section>
      </section>
      <NavBar />
      <AnnouncementBar />
    </nav>
  );
};

export default Header;
