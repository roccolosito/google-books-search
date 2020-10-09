import React from "react";
import "./Book.css";

var props = {
  title: "Alice",
  author: "Carrol",
  description: "this is a nice book",

}


function Book(props) {
  return (
    <div className="text-center">
      <h3>title: {props.title}</h3>
      <h3>author: {props.author}</h3>
      <h3>description: {props.description}</h3>
      <h3>image: {props.image}</h3>
      <h3>link: {props.link}</h3>
    </div>
  );
}

export default Book;
