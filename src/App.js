import Home from './screens/Home/Home.jsx';
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/work">
        <h1>work: gallery menu</h1>
      </Route>
      <Route exact path="/about">
        <h1>about: artist statement</h1>
      </Route>
      <Route exact path="/contact">
        <h1>contact: links</h1>
      </Route>

    </div>
  );
}

export default App;
