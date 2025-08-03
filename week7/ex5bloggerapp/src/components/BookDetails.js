import React from "react";

const BookDetails = () => {
  const books = [
    { id: 1, title: "Master React", price: 670 },
    { id: 2, title: "Deep Dive into Angular 11", price: 800 },
    { id: 3, title: "Mongo Essentials", price: 450 },
  ];

  const cardStyle = {
    borderLeft: "4px solid green",
    padding: "20px",
    width: "250px",
    backgroundColor: "white",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: "bold" }}>Book Details</h3>
      {books.map(book => (
        <div key={book.id} style={{ marginBottom: "15px" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>{book.title}</p>
          <p style={{ margin: 0 }}>{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
