import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import API from "./utils/API";
import Header from "./components/Header/Header";
import SearchPage from "./pages/Search";
import SavedPage from "./pages/Saved";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/", "/search"]} component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
