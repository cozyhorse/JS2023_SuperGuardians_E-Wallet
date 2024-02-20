import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";
import "./Wallet.scss";
import { activeCardDb } from "../data/ActiveCardDb";
import { useState } from "react";




const Wallet = () => {
  const [newCards, setCards] = useState(cardDb);
  const getActiveCard =(cardId) => {
    activeCardDb.push(cardId);
    const updatedCards = newCards.filter((card) => card.id !== cardId)
    setCards(updatedCards);
    console.log(activeCardDb);
    console.log(updatedCards)
    if (activeCardDb.length === 1) {   // Skicka bort / tillbaka det aktiva kortet
      
    }
  };

  const cards = newCards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
      color={card.color}
      backgroundColor={card.backgroundColor}
      onClick={()=> getActiveCard(card)}
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
