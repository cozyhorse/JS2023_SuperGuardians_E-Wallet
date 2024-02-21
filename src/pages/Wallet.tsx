import AddACard from "../components/Button/Add-A-Card";
import Card from "../components/Card/Card";
import { cardDb } from "../data/CardDb";
import "./Wallet.scss";
import { activeCardDb } from "../data/ActiveCardDb";
import { useState } from "react";
import { props } from "../constants/Constants";




const Wallet = () => {
  const [newCards, setCards] = useState(cardDb);
  const [activeCard, setActiveCard] = useState(null);
  const getActiveCard =(cardId: number, card: object) => { setActiveCard(card)
    // activeCardDb.push(card);
    const updatedCards = cardDb.filter((activeCard: props) => activeCard.id !== cardId)
    setCards(updatedCards);
    // if (activeCard) {
    //   console.log('Mo', activeCard)
    // }
    // console.log("active card db", activeCardDb);
    // console.log("updated cards", updatedCards)
    // if (activeCardDb.length >= 1) {   // Skicka bort / tillbaka det aktiva kortet
    //   // byta ut objekt mot nytt objekt och skicka tillbak adet gamla objektet
    // }
  };

  const cards = newCards.map((card: props) => (
    <Card
      key={card.id}
      id={card.id}
      cardnumber={card.cardnumber}
      cardholder={card.cardholder}
      date={card.date}
      vendor={card.vendor}
      color={card.color}
      ccv={card.ccv}
      backgroundColor={card.backgroundColor}
      onClick={()=> getActiveCard(card.id, card)}
    />
  ));

  let activeCardDom = "noCardSelected";
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
  // const activeCard = activeCardDb.map((card: props) => (
  //   <Card
  //     key={card.id}
  //     id={card.id}
  //     cardnumber={card.cardnumber}
  //     cardholder={card.cardholder}
  //     date={card.date}
  //     vendor={card.vendor}
  //     ccv={card.ccv}
  //     color={card.color}
  //     backgroundColor={card.backgroundColor}
  //     onClick={()=> getActiveCard(card.id, card)}
  //   />
  // ));

  return (
    <>
      <h2>E-WALLET</h2>
      <div className="activeCard">{activeCardDom}</div>
      <div className="cardStack">{cards}</div>

      <AddACard />
    </>
  );
};

export default Wallet;
