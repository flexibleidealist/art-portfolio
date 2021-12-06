import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav(){
  return(
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav