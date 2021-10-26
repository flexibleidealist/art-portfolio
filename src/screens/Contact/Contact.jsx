import Nav from "../../components/Nav/Nav"
import "./Contact.css"
function Contact(){
  return(
    <div className="contact-screen">
      <Nav />
      <main className="contact">
        <a href="" target="_blank">instagram</a>
        <a href="https://www.flexibleidealist.com/" target="_blank">software engineering portfolio</a>
        <a href="https://github.com/flexibleidealist" target="_blank">github</a>
        <a href="mailto:nrynearson@gmail.com">send me a message</a>
      </main>
    </div>
  )
}

export default Contact