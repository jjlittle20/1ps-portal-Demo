import "./App.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Components/Orders";
import Nav from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Orders" exact component={Orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
