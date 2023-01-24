import "../css/header.css";
import logo from "../images/logo.png";
import userIcon from "../images/user.jpeg";
import search from "../images/search.jpeg";
import burger from "../images/burger-menu.jpeg";
import bag from "../images/bag.jpeg";
import currencies from "../currencies.json";
import { useState } from "react";

const Header = () => {
  const currencyList = currencies.currencyList;
  const navItems = [
    "Best Sellers",
    "Offers",
    "Skincare",
    "Bath & Body",
    "Mother & Baby",
    "Gifts",
    "Aromatherapy",
    "Wellbeing",
    "Therapies",
    "About Us",
  ];
  const [selectedCurr, setSelectedCurr] = useState(currencyList[0]);
  const [currOpen, setCurrOpen] = useState(false);

  function handleSelectCurr(str) {
    setSelectedCurr(str);
    setCurrOpen(false);
  }

  // window.addEventListener("click", (event) => {
  //   const openedCurrs = document.getElementsByClassName("currency-list");
  //   console.log(openedCurrs, "<<<openedCurrs");
  //   if (
  //     event.target !== openedCurrs &&
  //     event.target.parentNode !== openedCurrs
  //   ) {
  //     console.log("clicked");
  //   }
  // });

  return (
    <div>
      <section className="header-toolbar">
        <ul>
          <li>
            <p
              align="right"
              onClick={(e) => setCurrOpen(!currOpen)}
              className="select-currency"
            >
              {selectedCurr}
            </p>
            {currOpen && (
              <ul className="currency-list">
                {currencyList.map((currency) => (
                  <li>
                    <p
                      className="currencies"
                      key={currency}
                      onClick={(e) => handleSelectCurr(e.target.innerText)}
                    >
                      {currency}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <p>Loyalty</p>
          </li>
          <li>
            <p>Accessibility</p>
          </li>
          <li>
            <p>Contact us</p>
          </li>
          <li>
            <p>Help</p>
          </li>
        </ul>
      </section>
      <section className="header-main">
        <section className="header-left">
          <img className="header-logo" src={logo} alt="logo" />
        </section>
        <section className="header-right">
          <img className="header-icon" src={userIcon} alt="userIcon" />
          <img className="header-icon" src={search} alt="searchIcon" />
          <img className="header-icon" src={burger} alt="burgerMenu" />
          <img className="header-icon" src={bag} alt="shoppingBag" />
        </section>
      </section>
      <div className="nav-container">
        {navItems.map((item) => (
          <p key={item} className="nav-item">
            {item}
          </p>
        ))}
      </div>
      <div className="announcement-bar"></div>
    </div>
  );
};

export default Header;
