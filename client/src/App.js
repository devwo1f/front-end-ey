import React, { useMemo, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Searchpage from "./Components/Searchpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loggedin from "./Components/Loggedin";
import SearchResultsPage from "./Components/SearchResultsPage";
import UserGetin from "./Components/UserGetin";
import Upload from "./Components/Upload";
import { UserContext } from "./UserContext";

function App() {
  const [value, setValue] = useState("user");
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/loggedin" component={Loggedin} />
        <Route path="/searchpage" component={Searchpage} />
        <Route path="/search" component={SearchResultsPage} />
        <Route exact path="/" component={UserGetin} />
        <Route path="/upload" component={Upload} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
