import React from "react";
import "./Saved.css";

import { Card, Button } from "react-bootstrap";

function Saved({book, deleteBook}) {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.image} alt=" " />
      <Card.Body>
        <Card.Title>Book Description</Card.Title>
        <Card.Text className="desc">
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
          <h3>Description: {book.description}</h3>
        </Card.Text>
        <Button variant="dark" onClick={() => deleteBook(book._id)}>Delete</Button>
      </Card.Body >
    </Card >
    )
  }
  
  export default Saved;