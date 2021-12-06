import { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
import works from "../../works.json"
import "./Carousel.css"

function Carousel() {
  const [index, setIndex] = useState(0)
  const covers = works.filter(work => work.coverImage)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    duration: 2000,
    trail: 1000
  })

  useEffect(() => {
    setInterval(() => setIndex(index => (index + 1) % covers.length), 10000)
  }, [])

  return (
    <div className="carousel">
      {transitions((style, i) => (
        <animated.img style={style} src={covers[i].image} alt={covers[i].title}></animated.img>
        ))}
    </div>
  )}
  
  export default Carousel
  
 