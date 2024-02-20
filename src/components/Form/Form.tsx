import "./Form.scss";
import { useState } from "react";
// import { Card } from "../../constants/Constants";
import { cardDb } from "../../data/CardDb";

const Form = () => {
  const [formData, setFormData] = useState({
    cardnumber: "",
    cardholder: "",
    ccv: "",
    date: "",
    vendor: "blockchain",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);

    let backgroundColor = "";
    let color = "";
    if (formData.vendor === "bitcoin") {
      backgroundColor = "rgba(255, 174, 52, 1)";
      color = "black";
    } else if (formData.vendor === "ninjabank") {
      backgroundColor = "rgba(34, 34, 34, 1)";
      color = "white";
    } else if (formData.vendor === "blockchain") {
      backgroundColor = "rgba(139, 88, 249, 1)";
      color = "white";
    } else {
      backgroundColor = "rgba(243, 51, 85, 1)";
      color = "white";
    }

    cardDb.push({
      ...formData,
      id: cardDb.length + 1,
      backgroundColor: backgroundColor,
      color: color,
      zIndex: cardDb.length + 1,
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
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
          />
        </section>
        <section>
          <label htmlFor="cardholder">CARDHOLDER NAME</label>
          <input
            id="cardholder"
            name="cardholder"
            type="text"
            pattern="^[A-Za-zÅÄÖåäö\s]*$" // Reg ex
            value={formData.cardholder}
            onChange={handleChange}
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
            />
          </section>
        </section>
        <section>
          <label htmlFor="vendor">VENDOR</label>
          <select
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
