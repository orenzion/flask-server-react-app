import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Components/Home'
import About from './Components/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <NavbarComponent/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/About">
              <About/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
