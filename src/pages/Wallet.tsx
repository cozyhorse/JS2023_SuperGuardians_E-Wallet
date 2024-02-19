import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";

const Wallet = () => {
  const cards = cardDb.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
    />
  ));

  return (
    <>
      <h1>Wallet</h1>
      {cards}
      <AddACard />
    </>
  );
};

export default Wallet;
