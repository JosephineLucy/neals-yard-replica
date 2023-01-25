import { currencyList } from "../../componentData/componentData";
import "./HeaderToolbar.css";

const HeaderToolbar = ({
  selectedCurr,
  setSelectedCurr,
  currOpen,
  setCurrOpen,
}) => {
  function handleSelectCurr(str) {
    setSelectedCurr(str);
    setCurrOpen(false);
  }
  return (
    <div className="header-toolbar">
      <ul>
        <li>
          <p
            align="right"
            onClick={() => setCurrOpen(!currOpen)}
            className="select-currency"
          >
            {selectedCurr}
          </p>
          {currOpen && (
            <ul className="currency-list">
              {currencyList.map((currency) => (
                <li key={currency}>
                  <p
                    className="currencies"
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
    </div>
  );
};

export default HeaderToolbar;
