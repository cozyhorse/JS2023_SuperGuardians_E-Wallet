import Form from "../components/Form/Form";
import BackButton from "../components/Button/BackButton";
import Card from "../components/Card/Card.tsx";
import "./AddCard.scss";
const placeholderData = [
  {
    cardnumber: "XXXX XXXX XXXX XXXX",
    cardholder: "FIRSTNAME LASTNAME",
    date: "MM/YY",
    vendor: "blockchain",
    ccv: 0o0,
    backgroundColor: "grey",
  },
];
// Här importerar vi placeholder-data till kortet.
const AddCard = () => {
  const placeholder = placeholderData.map(({cardnumber, cardholder, date, vendor, ccv, backgroundColor}) => (
    <Card key={cardnumber} id={+cardnumber} cardnumber={cardnumber} cardholder={cardholder} vendor={vendor} date={date} ccv={ccv} color={""} backgroundColor={backgroundColor} onClick={() => console.log("test")} />
  )) 
  return (
    <>
    <div className="addCardContainer">
      <h1>ADD A NEW CARD</h1>
      <h4>NEW CARD</h4>
      {placeholder}
      <Form />
      <BackButton />
      </div>
    </>
  );
};

export default AddCard;
