import Nav from "../../components/Nav/Nav";
import "./About.css"

function About(){
  return(
    <div className="about-screen">
      <Nav />
      <main className="about">
        <img src="https://i.imgur.com/kHvKSSc.jpg" alt="Nicholas" />
        <p className="artist-statement">I mainly work with found images. I often begin by asking, what simple intervention can I make in an image that will transform it? I like to work with formal qualities and my favorite interventions are forms of drawing or erasure.<br/><br/> When I draw, I rarely use things like pens, pencils, or charcoal. Instead, I draw with a knife, with a thread and needle, or by creating lines and forms through juxtaposition.<br/><br/> Erasure sometimes means cutting an element out of an image. But more often I prefer partial erasure: removing a portion of a particular element, drawing over it, or obscuring it from view. I like to use partial erasure to stimulate the viewers' imagination, inviting them to fill in gaps, draw unexpected connections, or sometimes see a ghost.
</p>
        <p className="bio">My formal training is in academia. I earned a PhD in Classics in 2006 and taught Greek and Latin for fifteen years, specializing in Greek literature. I have frequently shared my work at academic conferences and I have published scholarly articles on Homer, Greek tragedy, and Hellenistic poetry. As an artist, I am mostly self-taught, although I have taken a few classes in figure drawing and a collage workshop at SVA in New York. I live in Brooklyn.</p> 
      </main>   
    </div>
  )
}

export default About