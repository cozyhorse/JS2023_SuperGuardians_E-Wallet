import BitcoinLogo from "../../assets/img/Bitcoin-logo.svg";
import chip from "../../assets/img/chip-transformed.png"
import ChainLogo from "../../assets/img/chain-logo.svg";
import Group from "../../assets/img/Group.svg";
import Subtract from "../../assets/img/Subtract.svg";
import "./Card.scss"
import { FaWifi } from "react-icons/fa6";

const Card = ({ id, cardnumber, cardholder, date, vendor, color, backgroundColor }) => {
  return (
    <div className="card-container" key={id} style={{backgroundColor: backgroundColor, color: color}}>
      <div className="card-container__row">
        <div>
        <FaWifi className="icon" />
          <div className="chip"><img src={chip} alt="" /></div>
          
        </div>
        <div>
        <img src={BitcoinLogo} alt="" />
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
