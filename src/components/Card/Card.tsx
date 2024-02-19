import BitcoinLogo from "../../assets/img/Bitcoin-logo.svg";
import ChainLogo from "../../assets/img/chain-logo.svg";
import Group from "../../assets/img/Group.svg";
import Subtract from "../../assets/img/Subtract.svg";

const Card = ({ id, cardnumber, cardholder, date, vendor }) => {
  return (
    <div className="card-container" key={id}>
      <div className="card-container__row">
        <p>{vendor}</p>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="chip"></div>
      <p className="card-number">{cardnumber}</p>
      <div className="card-container__row">
        <div className="card-container__column">
          <p>CARDHOLDER NAME</p>
          <p>{cardholder}</p>
        </div>
        <div className="card-container__column">
          <p>VALID THRU</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
