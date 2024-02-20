import Form from "../components/Form/Form";
import BackButton from "../components/Button/BackButton";
import Card from "../components/Card/Card.tsx";
const placeholderData = [
  {
    cardnumber: "XXXX XXXX XXXX XXXX",
    cardholder: "FIRSTNAME LASTNAME",
    date: "MM/YY",
    vendor: "blockchain",
    ccv: 0o0,
  },
];

const AddCard = () => {
  const placeholder = placeholderData.map(({cardnumber, cardholder, date, vendor, ccv}) => (
    <Card key={cardnumber} id={+cardnumber} cardnumber={cardnumber} cardholder={cardholder} vendor={vendor} date={date} ccv={ccv} color={""} backgroundColor={""} onClick={() => console.log("test")} />
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
