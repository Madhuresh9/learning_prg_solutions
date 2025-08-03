import React from "react";

const office = {
  name: "Cognizant",
  rent: 50000,
  address: "Chennai",
  image: "https://images.moneycontrol.com/static-mcnews/2021/09/Cognizant-770x433.jpg" 
};

const rentStyle = {
  color: office.rent <= 60000 ? "red" : "green",
  fontWeight: "bold"
};

const OfficeList = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontWeight: "bold" }}>Office Space , at Affordable Range</h1>
      <img src={office.image} alt={office.name} width="300" style={{ marginTop: "10px" }} />
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontWeight: "bold" }}>Name: {office.name}</h2>
        <p style={rentStyle}>Rent: Rs. {office.rent}</p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>
    </div>
  );
};

export default OfficeList;
