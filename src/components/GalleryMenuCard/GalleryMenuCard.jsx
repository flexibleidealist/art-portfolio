import { Link } from "react-router-dom"
import "./GalleryMenuCard.css"
function GalleryMenuCard({ gallery }){
  return(
    <div className="gallery-menu-card">
      <img src={gallery.coverImage}></img>
      <h3>{gallery.title}</h3>
    </div>
  )
}

export default GalleryMenuCard