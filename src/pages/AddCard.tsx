import Form from "../components/Form/Form";
import BackButton from "../components/Button/BackButton";
import Card from "../components/Card/Card.tsx";
const placeholderData = [
  {
    cardnumber: "XXXX XXXX XXXX XXXX",
    cardholder: "FIRSTNAME LASTNAME",
    date: "MM/YY",
    vendor: "blockchain",
  },
];

const AddCard = () => {
  const placeholder = placeholderData.map(({cardnumber, cardholder, date, vendor}) => (
    <Card key={cardnumber} id={cardnumber} cardnumber={cardnumber} cardholder={cardholder} vendor={vendor} date={date} />
  )) 
  return (
    <>
      <h1>ADD CARD</h1>
      {placeholder}
      <Form />
      <BackButton />
    </>
  );
};

export default AddCard;
