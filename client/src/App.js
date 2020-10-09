import React from "react";
import "./App.css";
import API from "./utils/API";
import Header from "./components/Header/Header";
import SearchForm from "./components/Search/SearchForm";
import Results from "./components/Search/Results";


function App() {
  return(
  <div>
      <Header />
      <SearchForm />
      <Results />
    </div>
  );
}

export default App;
