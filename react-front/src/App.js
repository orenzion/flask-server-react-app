import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Iris from "./Components/Iris";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <div className="content">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/iris">
                <Iris />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
