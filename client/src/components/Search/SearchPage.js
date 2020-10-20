import React, { Component } from "react";
import "./SearchPage.css";
import Results from "./Results.js"
// import API from "../../utils/googleBooks";
import SearchArea from "../Search/SearchArea"
// import axios from "axios";
import request from "superagent";
// import e from "express";


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
      });
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <Results />
      </div>
    );
  }
}

export default SearchPage;