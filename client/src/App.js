import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Searchpage from "./Components/Searchpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchResultsPage from "./Components/SearchResultsPage";
import Upload from "./Components/Upload";
import { UserContext } from "./UserContext";
import DataContext from "./DataContext";

function App() {
  const [value, setValue] = useState("user");
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  const [contextArray, setContextArray] = useState(["H"]);

  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <UserContext.Provider value={providerValue}>
        <DataContext.Provider value={{ contextArray, setContextArray }}>
          <Route path="/searchpage" component={Searchpage} />
          <Route path="/search" component={SearchResultsPage} />
        </DataContext.Provider>
        <Route path="/upload" component={Upload} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
