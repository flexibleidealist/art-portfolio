import { Link } from "react-router-dom"
import "./Nav.css"

function Nav(){
  return(
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav