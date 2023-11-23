import React, { useState } from "react";
import "../Components/Hero.css";
import cardFront from "../interactive-card-details-form-main/interactive-card-details-form-main/images/bg-card-front.png";
import cardBack from "../interactive-card-details-form-main/interactive-card-details-form-main/images/bg-card-back.png";

const Hero = () => {
  const [number, setNumber] = useState("");

  return (
    <div className="Hero">
      <div>
        <div className="frontCard">
          <img className="cardFront" src={cardFront} alt="Card Front" />
          <p className="number">0000 0000 0000 0000</p>
          <span className="cardSpan">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </span>
          {/* <table>
            <tr>
              <td>{name}</td>
              <td>{name}</td>
            </tr>
          </table> */}
        </div>

        <div className="backCard">
          <img className="cardBack" src={cardBack} alt="Card Back" />
          <p className="CVC">000</p>
        </div>
      </div>

      <div className="inputField">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label htmlFor="">CARD NUMBER</label>
        <input type="text" placeholder="e.g. 1234 5678 9123 0000" />

        <div className="expDate">
          <div className="flexColumn">
            <label htmlFor="">EXP.DATE(MM/YY)</label>
            <span>
              <input style={{ width: "4em" }} placeholder="MM" type="text" />
              <input
                style={{ width: "4em", marginLeft: "10px" }}
                type="text"
                placeholder="YY"
              />
            </span>
          </div>

          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input
              style={{ width: "10em", marginLeft: "15px" }}
              type="text"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Hero;
