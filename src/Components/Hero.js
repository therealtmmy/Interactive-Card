import React, { useState } from "react";
import "../Components/Hero.css";
import cardFront from "../interactive-card-details-form-main/interactive-card-details-form-main/images/bg-card-front.png";
import cardBack from "../interactive-card-details-form-main/interactive-card-details-form-main/images/bg-card-back.png";
import ThankYou from "./ThankYou";

const Hero = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [showCVC, setShowCVC] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [success, setSuccess] = useState(true);

  const formatCreditCardNumber = (input) => {
    const cleanedInput = input.replace(/\D/g, "");
    const formattedInput = cleanedInput.replace(/(\d{4})/g, "$1 ").trim();
    return formattedInput;
  };

  const handleCardNumberChange = (e) => {
    const formattedNumber = formatCreditCardNumber(e.target.value);
    setCardDetails({ ...cardDetails, number: formattedNumber });
  };

  const submit = () => {
    if (cardDetails.name && cardDetails.cvc !== "") {
      setSuccess(!success);
    }

    if (cardDetails.name || cardDetails.number === "") {
      setShowName(true);
      setShowNumber(true);
    }

    if (cardDetails.month || cardDetails.cvc === "") {
      setShowMonth(true);
      setShowCVC(true);
    }
  };

  return (
    <div className="Hero">
      <div>
        <div className="frontCard">
          <svg
            className="cardLogo"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
          <img className="cardFront" src={cardFront} alt="Card Front" />
          <p className="number">
            {cardDetails.number || "0000 0000 0000 0000"}
          </p>
          <table className="cardSpan">
            <tr>
              <td className="firstTable">
                {cardDetails.name || "JANE APPLESEED"}
              </td>
              <td className="secondTable">
                {cardDetails.month || "00"}/{cardDetails.year || "00"}
              </td>
            </tr>
          </table>
        </div>

        <div className="backCard">
          <img className="cardBack" src={cardBack} alt="Card Back" />
          <p className="CVC">{cardDetails.cvc || "000"}</p>
        </div>
      </div>

      {success ? (
        <div className="inputField">
          <label htmlFor="">CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            style={{
              border:
                showName && cardDetails.name === "" ? "1px solid red" : null,
            }}
            value={cardDetails.name}
            onChange={(e) => {
              const inputText = e.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputText)) {
                setCardDetails({ ...cardDetails, name: inputText });
              }
            }}
            onBlur={() => setShowName(true)}
            maxLength="20"
          />
          {showName && cardDetails.name === "" ? (
            <span className="nameError">Name cannot be blank</span>
          ) : null}

          <label htmlFor="">CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            style={{
              border:
                showNumber && cardDetails.number === ""
                  ? "1px solid red"
                  : null,
            }}
            value={cardDetails.number}
            onChange={handleCardNumberChange}
            onBlur={() => setShowNumber(true)}
            maxLength="19"
          />
          {showNumber && cardDetails.number === "" ? (
            <span className="nameError">Number cannot be blank</span>
          ) : null}

          <div className="expDate">
            <div className="flexColumn">
              <label htmlFor="">EXP.DATE(MM/YY)</label>
              <div className="expDiv">
                <div>
                  <input
                    style={{
                      width: "4em",
                      border:
                        showMonth && cardDetails.month === ""
                          ? "1px solid red"
                          : null,
                    }}
                    placeholder="MM"
                    type="text"
                    value={cardDetails.month}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, month: e.target.value })
                    }
                    onBlur={() => setShowMonth(true)}
                    maxLength="2"
                  />
                  {showMonth && cardDetails.month === "" ? (
                    <p className="expError">Can't be blank</p>
                  ) : null}
                </div>

                <div>
                  <input
                    style={{ width: "4em", marginLeft: "10px" }}
                    type="text"
                    placeholder="YY"
                    value={cardDetails.year}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, year: e.target.value })
                    }
                    maxLength="2"
                  />
                </div>
              </div>
            </div>

            <div className="cvc">
              <label htmlFor="">CVC</label>
              <input
                style={{
                  width: "10em",
                  marginLeft: "15px",
                  border:
                    showCVC && cardDetails.cvc === "" ? "1px solid red" : null,
                }}
                type="text"
                placeholder="e.g. 123"
                value={cardDetails.cvc}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvc: e.target.value })
                }
                onBlur={() => setShowCVC(true)}
                maxLength="3"
              />
              {showCVC && cardDetails.cvc === "" ? (
                <span className="error">Can't be blank</span>
              ) : null}
            </div>
          </div>
          <button onClick={submit}>Confirm</button>
        </div>
      ) : (
        <ThankYou />
      )}
    </div>
  );
};

export default Hero;
