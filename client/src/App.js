import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Searchpage from "./Components/Searchpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loggedin from "./Components/Loggedin";
import SearchResultsPage from "./Components/SearchResultsPage";
import UserGetin from "./Components/UserGetin";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/loggedin" component={Loggedin} />
      <Route path="/searchpage" component={Searchpage} />
      <Route path="/search" component={SearchResultsPage} />
      <Route path="/get" component={UserGetin} />
    </Router>
  );
}

export default App;
