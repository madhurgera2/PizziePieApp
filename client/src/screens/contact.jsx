import React from "react";
import './about.css'
// import img from './about.png' 
function Contact()
{
    return(
        <div>
           <p className="about-para">hello ji kese ho</p>
           <p className="about-para">hello ji kese ho</p>
           <img className="aboutimg" src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ythabyekzjyyrmkmjqlg" alt="#"></img>
           <h1>PizziePie</h1>
           <h1>Delivering Happiness</h1>
           <p>Developed by Madhur</p>
           <p>📧E-mail: <a href = "mailto: madhurgera2@gmail.com">madhurgera2@gmail.com</a></p>
           <p>📞Phone Number: <a href = "tel: 9729692380">9729692380</a></p>
           <p>Connect With me On <a href="https://www.linkedin.com/in/madhur-gera-a661b2163/">Linkedin</a></p>
           <p>Whatsapp me <a href="https://api.whatsapp.com/send?phone= 9729692380">Send Message</a></p>
           <p>THANK YOU</p>
            
        </div>
    )
}
export default Contact;