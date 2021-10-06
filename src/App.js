import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Launch from "./Launch";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/launch/:id">
            <Launch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
