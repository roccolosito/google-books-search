import React from "react";
import "./Book.css";

import { Card, Button } from "react-bootstrap";

var props = {
  title: "Alice",
  author: "Carrol",
  description: "this is a nice book",

};

function Book(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} alt=" " />
      <Card.Body>
        <Card.Title>Book Description</Card.Title>
        <Card.Text className="desc">
          <h2>{props.title}</h2>
          <h3>Author: {props.author}</h3>
          <h3>Description: {props.description}</h3>
        </Card.Text>
        <Button variant="dark">View</Button>
        <Button variant="dark">Save</Button>
      </Card.Body >
    </Card >

    // <div className="text-center">
    //   <h3>title: {props.title}</h3>
    //   <h3>author: {props.author}</h3>
    //   <h3>description: {props.description}</h3>
    //   <h3>image: {props.image}</h3>
    //   <h3>link: {props.link}</h3>
    // </div>
  );
}

export default Book;
