import "./App.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Components/Orders";
import Nav from "./Components/Header";
import Expenses from "./Components/Expenses";
import ExpenseRequest from "./Components/ExpenseRequest"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Orders"  component={Orders} />
          <Route path="/Expenses" exact component={Expenses} />
          <Route path="/ExpenseRequest" exact  component={ExpenseRequest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
