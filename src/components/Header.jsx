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
  const [selectedCurr, setSelectedCurr] = useState(currencyList[0]);
  const [currOpen, setCurrOpen] = useState(false);

  function handleSelectCurr(str) {
    setSelectedCurr(str);
    setCurrOpen(false);
  }

  return (
    <div>
      <section className="header-toolbar">
        <ul>
          <li>
            <p
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
    </div>
  );
};

export default Header;
