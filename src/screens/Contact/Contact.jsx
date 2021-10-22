import Nav from "../../components/Nav/Nav"

function Contact(){
  return(
    <div className="contact-screen">
      <Nav />
      <main className="contact">
        <a href="">instagram</a>
        <a href="">software engineering portfolio</a>
        <a href="">github</a>
        <a href="mailto:nrynearson@gmail.com">send me a message</a>
      </main>
    </div>
  )
}

export default Contact