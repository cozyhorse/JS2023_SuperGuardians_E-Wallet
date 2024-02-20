import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";
import "./Wallet.scss";
import { activeCardDb } from "../data/ActiveCardDb";
import { useState } from "react";




const Wallet = () => {
  const [newCards, setCards] = useState(cardDb);
  const getActiveCard =(cardId, card) => {
    activeCardDb.push(card);
    const updatedCards = newCards.filter((card) => card.id !== cardId)
    setCards(updatedCards);
    console.log("active card db", activeCardDb);
    console.log("updated cards", updatedCards)
    if (activeCardDb.length === 1) {   // Skicka bort / tillbaka det aktiva kortet
      // byta ut objekt mot nytt objekt och skicka tillbak adet gamla objektet
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
      onClick={()=> getActiveCard(card.id, card)}
    />
  ));

  
  const activeCard = activeCardDb.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
      color={card.color}
      backgroundColor={card.backgroundColor}
      onClick={()=> getActiveCard(card.id, card)}
    />
  ));

  return (
    <>
      <h1>Wallet</h1>
      <div className="activeCard">{activeCard}</div>
      <div className="cardStack">{cards}</div>

      <AddACard />
    </>
  );
};

export default Wallet;
