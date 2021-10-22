import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Nicholas Rynearson</h1>
        <div className="home-links">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
      <main>
        <section className="carousel">
          <img></img>
        </section>
      </main>
    </div>
  )
}

export default Home