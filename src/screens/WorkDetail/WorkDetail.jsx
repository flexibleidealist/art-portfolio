import { Link, useParams } from "react-router-dom"
import Nav from "../../components/Nav/Nav.jsx"
import works from "../../works.json"
import "./WorkDetail.css"

function WorkDetail(){
  const params = useParams()
  const currentWork = works.find(work => work.id == params.id)
  return currentWork ? 
  (
    <div className="work-detail-screen">
      <Nav />
      <main className="main-work-detail">
        <Link className="back-to-gallery" to={`/galleries/${currentWork.gallery}`}>back to gallery</Link>
        <div className="image-container">
          <img src={currentWork.image} alt={currentWork.title} />
        </div>
        <div className="work-details">
          <h3>{currentWork.title}</h3>
          <h4>{currentWork.year}</h4>
          <h4>{currentWork.materials}</h4>
        </div>
      </main>
    </div>
  ) : 
  (
    <h2>Loading...</h2>
  )
}

export default WorkDetail