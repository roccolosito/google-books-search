import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import API from "./utils/API";
import Header from "./components/Header/Header";
import SearchForm from "./components/Search/SearchForm";
import Results from "./components/Search/Results";


function App() {
  return(
    <Router>
      <div>
        <Header />
          <Switch>
            <Route exact path={["/", "/search"]} component={SearchForm} />
            <Route exact path="/saved" component={Results} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
