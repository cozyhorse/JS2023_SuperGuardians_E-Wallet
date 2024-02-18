import "./Form.scss"

const Form = () => {
  return (
    <> 
    <form className="form" action="">
      <section>
      <label htmlFor="cardnumber">CARD NUMBER</label>
      <input id="cardnumber" name="cardnumber" type="text" />
      </section>
      <section>
        <label htmlFor="cardholder">CARDHOLDER NAME</label>
        <input id="cardholder" name="cardholder" type="text" />
      </section>
      <section className="date-ccv">
        <section>
          <label htmlFor="date">VALID THRU</label>
          <input id="date" name="date" type="text" />
        </section>
        <section>
          <label htmlFor="ccv">CCV</label>
          <input id="ccv" name="ccv" type="text" />
        </section>
      </section>
      <section>
        <label htmlFor="vendor">VENDOR</label>
        <select name="vendor" id="vendor">
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
