import './App.css';
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";

import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
export default function App() {
  return (
<Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Pokemon">Pokemon</Link>
      </li>
      <li>
        <Link to="/Pokedex">Pokedex</Link>
      </li>
    </ul>
  </nav>

  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Pokemon">
            <Pokemon />
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




