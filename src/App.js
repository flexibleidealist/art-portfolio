import { Route } from "react-router-dom"
import Home from './screens/Home/Home.jsx';
import About from "./screens/About/About.jsx";
import GalleryMenu from './screens/GalleryMenu/GalleryMenu.jsx';
import Gallery from "./screens/Gallery/Gallery.jsx"
import Contact from "./screens/Contact/Contact.jsx";
import works from "./works.json"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/work">
        <GalleryMenu />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/galleries/:title">
        <Gallery />
      </Route>
    </div>
  );
}

export default App;
