import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";

const Wallet = () => {
  const cards = cardDb.map((card) => (
    // if(card.vendor === "bitcoin") {
    // const backgroundStyle = "rgba(255, 174, 52, 1)";
    // }

    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
      color={card.color}
      backgroundColor={card.backgroundColor}
    />
  ));

  return (
    <>
      <h1>Wallet</h1>
      <div className="activeCard">HÄR SKA AKTIVA KORTET LIGGA</div>
      <div className="cardStack">{cards}</div>
      <AddACard />
    </>
  );
};

export default Wallet;
