import { Link, useParams } from "react-router-dom"
import Nav from "../../components/Nav/Nav.jsx"
import Work from "../../components/Work/Work.jsx"
import works from "../../works.json"
import "./Gallery.css"

function Gallery(){
  const params = useParams()
  const galleryWorks = works.filter(work => work.gallery === params.title)
  return (
    <div className="gallery-container">
      <Nav />
      <main className="gallery">
      {galleryWorks.map(work => (
        <Link to={`/works/${work.id}`}>
          <Work work={work}/>
        </Link>
      ))}
      </main>

    </div>
  )
}

export default Gallery