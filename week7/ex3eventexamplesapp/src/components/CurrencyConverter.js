import React, { useState } from "react";

function CurrencyConverter() {
  const [inr, setInr] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(inr) / 0.0125; // INR to Euro conversion
    alert(`Converting to Euro Amount is ${converted.toFixed(0)}`);
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ marginTop: "30px", fontFamily: "Arial" }}>
      <h2 style={{ color: "green", fontWeight: "bold" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <td><label htmlFor="inr">Amount:</label></td>
              <td>
                <input
                  id="inr"
                  type="number"
                  value={inr}
                  onChange={(e) => setInr(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td><label>Currency:</label></td>
              <td><input type="text" value="Euro" readOnly /></td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CurrencyConverter;
