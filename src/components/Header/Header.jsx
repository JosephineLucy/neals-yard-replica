import "./Header.css";
import logo from "../../images/logo.png";
import HeaderToolbar from "../HeaderToolbar/HeaderToolbar";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import { navItems, headerIcons } from "../../componentData/componentData";

const Header = () => {
  return (
    <nav>
      <HeaderToolbar />
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
      <div className="nav-container">
        {navItems.map((item) => (
          <p key={item} className="nav-item">
            {item}
          </p>
        ))}
      </div>
      <AnnouncementBar />
    </nav>
  );
};

export default Header;
