import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Ship from "./Ship";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mission/:id">
            <Ship />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
