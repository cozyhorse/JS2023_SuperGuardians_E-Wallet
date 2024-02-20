import Bitcoin from "../../assets/img/Bitcoin-logo.svg";

import Blockchain from "../../assets/img/chain-logo.svg";

import Evilcorp from "../../assets/img/Bitcoin-logo.svg";
import Ninja from "../../assets/img/Bitcoin-logo.svg";

import chip from "../../assets/img/chip-transformed.png";

import Group from "../../assets/img/Group.svg";
import Subtract from "../../assets/img/Subtract.svg";
import "./Card.scss";
import { FaWifi } from "react-icons/fa6";

const Card = ({
  id,
  cardnumber,
  cardholder,
  date,
  vendor,
  color,
  backgroundColor,
}) => {
  let iconSrc = "";
  if (vendor === "ninja") {
    iconSrc = Ninja;
  } else if (vendor === "evilcorp") {
    iconSrc = Evilcorp;
  } else if (vendor === "blockchain") {
    iconSrc = Blockchain;
  } else {
    iconSrc = Bitcoin;
  }
  return (
    <div
      className="card-container"
      key={id}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <div className="card-container__row">
        <div>
          <FaWifi className="icon" />
          <div className="chip">
            <img src={chip} alt="" />
          </div>
        </div>
        <div>
          <img src={iconSrc} alt="" />
        </div>
      </div>

      <p className="card-number">{cardnumber}</p>
      <div className="card-container__row">
        <div className="card-container__column">
          <p className="cardHolder-Opacity">CARDHOLDER NAME</p>
          <p className="card-text-style">{cardholder}</p>
        </div>
        <div className="card-container__column">
          <p className="cardHolder-Opacity">VALID THRU</p>
          <p className="card-text-style date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
