import { Link } from "react-router-dom"
import "./Work.css"
function Work({ work }){
  return(
    <div className="work">
      <img src={work.image} />
    </div>
  )
}

export default Work