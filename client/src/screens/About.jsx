import React from "react";
import './about.css'
// import img from './about.png' 
function About()
{
    return(
        <div>
           <p className="about-para">hello ji kese ho</p>
           <p className="about-para">hello ji kese ho</p>
           <img className="aboutimg" src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ythabyekzjyyrmkmjqlg" alt="#"></img>
           <h1>PizziePie</h1>
           <h1>Delivering Happiness</h1>
           <p>PizziePie is a Full Stack Development project made by me, i.e. Madhur...I am a CSE undergraduate at Maharaja Agrasen institute of technology, New Delhi. </p>
           <p>This project is based on MERN stack</p>
            
        </div>
    )
}
export default About;