import { Link } from "react-router-dom"
import Nav from "../../components/Nav/Nav"
import GalleryMenuCard from "../../components/GalleryMenuCard/GalleryMenuCard"
import galleries from "../../galleries.json"
import "./GalleryMenu.css"
function GalleryMenu(props){
  return(
    <div className="gallery-menu-screen">
      <Nav />
      <main className="gallery-menu">
        {galleries.map(gallery => (
          <Link to={`/galleries/${gallery.title}`}><GalleryMenuCard 
            gallery={gallery}
          /></Link>
        ))}
      </main>
    </div>
  )
}

export default GalleryMenu