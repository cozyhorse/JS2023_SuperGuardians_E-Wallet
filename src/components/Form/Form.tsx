import "./Form.scss";
import { SyntheticEvent, useState } from "react";
import { cardDb } from "../../data/CardDb";

const Form = () => {
  const [formData, setFormData] = useState({
    // Här sparas det vi valt.
    cardnumber: "",
    cardholder: "",
    ccv: "",
    date: "",
    vendor: "blockchain",
  });
  // När man submittar så tar funktionen värdet genom att spara en kopia (ett objekt) av det som skrevs in (ändringen) i formData.
  const handleChange = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };
  // Här submittas värdet. Vi förhindrar att sidan laddas om.
  //Körs när man klickar på submit-knappen.
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    let backgroundColor = "";
    let color = "white";
    // Här bestäms utseendet på kortet beroende på vilken vendor som valts.
    if (formData.vendor === "bitcoin") {
      backgroundColor = "rgba(255, 174, 52, 1)";
      color = "black";
    } else if (formData.vendor === "ninjabank") {
      backgroundColor = "rgba(34, 34, 34, 1)";
    } else if (formData.vendor === "blockchain") {
      backgroundColor = "rgba(139, 88, 249, 1)";
    } else {
      backgroundColor = "rgba(243, 51, 85, 1)";
    }
    // Vi pushar in en kopia av det objekt vi fått ovanför.
    cardDb.push({
      ...formData,
      id: cardDb.length + 1, // Anpassas efter index och sätter id.
      backgroundColor: backgroundColor,
      color: color,
    });

    console.log("cardDb", cardDb);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} action="">
        <section>
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <input
            id="cardnumber"
            name="cardnumber"
            type="text"
            value={formData.cardnumber}
            onChange={handleChange}
            pattern="[0-9]{16}"
            minLength={16}
            maxLength={16}
          />
        </section>
        <section>
          <label htmlFor="cardholder">CARDHOLDER NAME</label>
          <input
            id="cardholder"
            name="cardholder"
            type="text"
            pattern="^[A-Za-zÅÄÖåäö\s]*$" // Regular expression.
            value={formData.cardholder}
            onChange={handleChange} // Här körs handleChange-funktionen.
            minLength={4}
            maxLength={30}
          />
        </section>
        <section className="date-ccv">
          <section>
            <label htmlFor="date">VALID THRU</label>
            <input
              id="date"
              name="date"
              type="text"
              value={formData.date}
              onChange={handleChange}
              pattern="[0-9]{4}"
              minLength={4}
              maxLength={4}
            />
          </section>
          <section>
            <label htmlFor="ccv">CCV</label>
            <input
              id="ccv"
              name="ccv"
              type="text"
              value={formData.ccv}
              onChange={handleChange}
              pattern="[0-9]{3}"
              minLength={3}
              maxLength={3}
            />
          </section>
        </section>
        <section>
          <label htmlFor="vendor">VENDOR</label>
          <select // Meny för att välja vendor.
            name="vendor"
            id="vendor"
            value={formData.vendor}
            onChange={handleChange}
          >
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="ninjabank">Ninja Bank</option>
            <option value="blockchain">Block Chain Inc</option>
            <option value="evilcorp">Evil Corp</option>
          </select>
        </section>
        <button type="submit">ADD CARD</button>
      </form>
    </>
  );
};

export default Form;
