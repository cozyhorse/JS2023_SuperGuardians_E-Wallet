import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";
import "./Wallet.scss";
import { useState } from "react";

const Wallet = () => {
  const [newCards, setCards] = useState(cardDb);
  const [activeCard, setActiveCard] = useState(null);
  // Hämtar det klickade kortet.
  const getActiveCard =(cardId: number, card: null) => { setActiveCard(card)
   // Filtrerar vår array med objekt och jämför activeCardId med cardId.
  const updatedCards = cardDb.filter((activeCard) => activeCard.id !== cardId)
    setCards(updatedCards);
  };

  // Här skriver vi ut hur korten ser ut innehåll (text, ikoner), per objekt som hittas.
  const cards = newCards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
      color={card.color}
      ccv={+card.ccv}
      backgroundColor={card.backgroundColor}
      onClick={()=> getActiveCard(card.id, card)}
    />
  ));
    // Här skriver vi ut hur korten ser ut innehåll (text, ikoner), på det klickade kortet.
  let activeCardDom; // När inget kort är valt.
  if (activeCard) {
    activeCardDom  = 
    <Card
      key={activeCard.id}
      id={activeCard.id}
      cardnumber={activeCard.cardnumber}
      cardholder={activeCard.cardholder}
      date={activeCard.date}
      vendor={activeCard.vendor}
      ccv={activeCard.ccv}
      color={activeCard.color}
      backgroundColor={activeCard.backgroundColor}
      onClick={()=> getActiveCard(activeCard.id, activeCard)}
    />
  }

  return (
    <>
    <div className="e-walletContainer ">
      <h2>E-WALLET</h2>
      <h4 className="activeCard-title">ACTIVE CARD</h4>
      <div className="activeCard">{activeCardDom}</div>
      <div className="cardStack">{cards}</div>

      <AddACard />
      </div>
    </>
  );
};

export default Wallet;
