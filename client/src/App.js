import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import API from "./utils/API";
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import Results from "./components/Search/Results";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/", "/search"]} component={SearchPage} />
          <Route exact path="/saved" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
