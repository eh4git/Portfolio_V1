import React, {useContext} from "react";
import NavBar from "../components/navBar/NavBar"
import Pdf from "../assets/docs/WebDevResume.pdf";
import profileText from "../assets/profileText"
import {Context} from "../context/index"
import Header from "../components/header/Header"

const Contact = () => {
   const {theme} = useContext(Context)
     const onResumeClick= ()=> {
      window.open(Pdf);
    }
    return(
        <>
        <NavBar/>
        <Header name="Contact" />
        <div className="contact-form container">
                <h2 id="contact">Contact Me</h2>
                {/* <form>
                <div className="form-group">
                    <label for="contactNameText">Name</label>
                    <input type="text" className="form-control nameText" id="contactNameText" placeholder="Enter your name." required />
                </div>
                <div className="form-group">
                    <label for="contactEmailText">Email address</label>
                    <input type="email" className="form-control emailText" id="contactEmailText" placeholder="yourEmail@example.com"
                        required />
                </div>
                <div className="form-group">
                    <label for="contactMessageText">Message</label>
                    <textarea className="form-control messageText" id="contactMessageText" placeholder="Enter your message here."
                        rows="10" maxlength="2500" required></textarea>
                </div>
                <button type="submit" id="contactFormBtn" className="btn btn-primary">Submit</button>
            </form> */}

                <a href={`mailto: ${profileText.email}?subject=I saw your profile`}>{profileText.email}</a>
        <p>{profileText.phone} <br/>
        {profileText.location}
        </p>
        {/* <a onClick={onResumeClick} target="_blank" >My Resume</a> */}
            </div>
        </>
    )
}

export default Contact