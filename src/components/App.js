import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import "../styles/App.css";

const Home = () => {
  return <div>Index</div>;
};

const Women = ({ match }) => {
  return (
    <div>
      <p>Women Items:</p>
      <ul>
        <li>
          <Link to={`${match.url}/grooming`}>Grooming</Link>
        </li>
        <li>
          <Link to={`${match.url}/shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`${match.url}/trouser`}>Trouser</Link>
        </li>
        <li>
          <Link to={`${match.url}/jewellery`}>Jewellery</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:item`} component={Item} />
    </div>
  );
};

const Item = ({ match }) => {
  return <div>{match.params.item}</div>;
};

function App() {
  return (
    <Router>
      <div className="main-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/women" component={Women} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
