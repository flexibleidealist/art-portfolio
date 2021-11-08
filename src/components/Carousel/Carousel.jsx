import { useState, useEffect } from "react"
import works from "../../works.json"
import "./Carousel.css"

function Carousel(){
  const [currentCover, setCurrentCover] = useState({ "title": "Cynic",
  "year": 2019,
  "materials": "paper",
  "image": "https://i.imgur.com/iwGQ8MT.jpg",
  "gallery": "collage",
  "id": 5,
  "coverImage": true})
  const [newCover, setNewCover] = useState(true)
  let i = 0
  const coverImages = works.filter(work => work.coverImage === true)
  const changeCover = () => {
    i < coverImages.length -1 ? i++ : i = 0;
    setNewCover(true)
    setCurrentCover(coverImages[i]);
    setTimeout(()=> {
      setNewCover(false)
    }, 4000)
  }
  useEffect(() => {
    setInterval(() => {
      changeCover()
    }, 11000)
  }, [])

  
  return currentCover ? 
  (
    <div className="carousel">
      <img className={newCover ? "fade-in" : "fade-out"} src={currentCover?.image} alt={`${currentCover.gallery} entitled ${currentCover.title}`} />
    </div>
  )
  : (
    <div>
      <h3>loading...</h3>
    </div>
  )
}

export default Carousel