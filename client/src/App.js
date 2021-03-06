import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Searchpage from "./Components/Searchpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchResultsPage from "./Components/SearchResultsPage";
import Upload from "./Components/Upload";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/searchpage" component={Searchpage} />
      <Route path="/search" component={SearchResultsPage} />
      <Route path="/upload" component={Upload} />
    </Router>
  );
}

export default App;
