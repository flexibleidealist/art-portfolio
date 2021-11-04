import Nav from "../../components/Nav/Nav"
import "./Contact.css"
function Contact(){
  return(
    <div className="contact-screen">
      <Nav />
      <main className="contact">
        <img src="/assets/icons/instagram-brands.svg" alt="instagram icon"></img>
        <a href="https://www.instagram.com/flexibleidealist/" target="_blank">instagram</a>
        <img src="/assets/icons/external-link-alt-solid.svg" alt="external link icon"></img>
        <a href="https://www.flexibleidealist.com/" target="_blank">software engineering portfolio</a>
        <img src="/assets/icons/github-brands.svg" alt="github icon"></img>
        <a href="https://github.com/flexibleidealist" target="_blank">github</a>
        <img src="/assets/icons/envelope-solid.svg" alt="email icon"></img>
        <a href="mailto:nrynearson@gmail.com">send me a message</a>
      </main>
    </div>
  )
}

export default Contact