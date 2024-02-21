import bitcoin from "../../assets/img/BitCoin.svg";
import blockchain from "../../assets/img/BlockChain.svg";
import chip from "../../assets/img/chip-transformed.png";
import ninjabank from "../../assets/img/NinjaBank.svg";
import evilcorp from "../../assets/img/EvilCorp.svg";
import "./Card.scss";
import { FaWifi } from "react-icons/fa6";
import { props } from "../../constants/Constants";

// Varje card förväntas få in alla dessa props (parametrar). Deklarerat i Wallet.tsx. Varje key behövs för att kunna använda värden i kortet, för att skriva ut dem på kortet sen.
const Card = ({
  id,
  cardnumber,
  cardholder,
  date,
  vendor,
  color,
  backgroundColor,
  onClick,
}: props) => {
  let iconSrc = "";

  const icons = {
    bitcoin,
    blockchain,
    ninjabank,
    evilcorp,
  } as object & string;
  //Check if vendor exists and matches a vendor in icons then set iconsrc to found vendor
  if (vendor && icons[vendor]) {
    iconSrc = icons[vendor];
  }

  return (
    // Här använder vi propsen / parametrarna som innehåller värdet, och lägger på rätt plats i kortet.
    <div
      className="card-container"
      onClick={onClick}
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
          <p className="card-text-style date">
            {date.toString().slice(0, 2)}/{date.toString().slice(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
