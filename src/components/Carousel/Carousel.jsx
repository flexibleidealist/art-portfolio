import { useState } from "react"
import works from "../../works.json"
import "./Carousel.css"

function Carousel(){
  // const [currentWork, setCurrentWork] = useState({})
  // let i = 0
  // const advanceImage = () => {
  //   i < works.length ? i++ : i = 0
  //   setCurrentWork(works[i])
  // }
  // setInterval(advanceImage, 3000)

//   let i = 0;
//   const slideShow = () => {
//   const image = document.getElementById('slide');
//   image.src = imageArr[i];
//   image.classList.add('fade');
//   i++;
//   setTimeout(() => {
//     image.classList.remove('fade');
//   }, 3500);
//   if (i === imageArr.length) {
//     i = 0;
//   }
// }
//   setInterval(slideShow, 6000);

  return (
    <div className="carousel">
      <img src="https://i.imgur.com/iwGQ8MT.jpg" alt="collage entitled Cynic" />
      {/* <img src={currentWork.image} alt={`${currentWork.title} from the ${currentWork.gallery} gallery`} /> */}
    </div>
  )
}

export default Carousel