import "./Form.scss";
import { SyntheticEvent, useState, useEffect } from "react";
import { cardDb } from "../../data/CardDb";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    cardnumber: "",
    cardholder: "",
    ccv: "",
    date: "",
    vendor: "bitcoin",
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (formIsValid) {
      let backgroundColor = "";
      let color = "white";

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

      const newCard = {
        ...formData,
        id: cardDb.length + 1,
        backgroundColor: backgroundColor,
        color: color,
      };

      cardDb.push(newCard);

      navigate("/");
    } else {
      setErrorMessage("Formulär ej korrekt ifyllt");
    }
  };

  useEffect(() => {
    const month = parseInt(formData.date.substring(0, 2), 10);
    const year = parseInt(formData.date.substring(2), 10);
    if (
      formData.cardnumber.length === 16 &&
      formData.cardholder.length > 3 &&
      formData.date.length === 4 &&
      formData.ccv.length === 3 &&
      month >= 1 &&
      month <= 12 &&
      year >= 22
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formData]);

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
            pattern="^[A-Za-zÅÄÖåäö\s]*$"
            value={formData.cardholder}
            onChange={handleChange}
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
        <p className="form__errorMessage">{errorMessage}</p>
        <button type="submit">ADD CARD</button>
      </form>
    </>
  );
};

export default Form;
