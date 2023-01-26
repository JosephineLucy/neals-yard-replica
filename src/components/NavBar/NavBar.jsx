import { navItems } from "../../componentData/navData";
import { useState } from "react";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const [bestOpen, setBestOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  //   const [  ]

  return (
    <div className="nav-container">
      <p
        onMouseEnter={() => setBestOpen(true)}
        onMouseLeave={() => setBestOpen(false)}
        key={navItems[0].id}
        className="nav-item"
      >
        {navItems[0].title}
      </p>
      <p key={navItems[1].id} className="nav-item">
        {navItems[1].title}
      </p>
      <p key={navItems[2].id} className="nav-item">
        {navItems[2].title}
      </p>
      <p key={navItems[3].id} className="nav-item">
        {navItems[3].title}
      </p>
      <p key={navItems[4].id} className="nav-item">
        {navItems[4].title}
      </p>
      <p key={navItems[5].id} className="nav-item">
        {navItems[5].title}
      </p>
      <p key={navItems[6].id} className="nav-item">
        {navItems[6].title}
      </p>
      <p key={navItems[7].id} className="nav-item">
        {navItems[7].title}
      </p>
      <p key={navItems[8].id} className="nav-item">
        {navItems[8].title}
      </p>
      <p key={navItems[9].id} className="nav-item">
        {navItems[9].title}
      </p>
    </div>
  );
};

export default NavBar;
