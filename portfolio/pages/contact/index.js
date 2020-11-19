import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
// import Pdf from "../../assets/docs/WebDevResume.pdf";
import profileText from "../../profileText"
import {Context} from "../../context/index"
import Header from "../../components/header/Header"
// import "./index.css"

const Contact = () => {
   const {theme} = useContext(Context)
     const onResumeClick= ()=> {
         console.log("need to fix pdf import or find work-around")
    //   window.open(Pdf);
    }
    return(
        <div className={"contactContainer " + theme}>
            <NavBar/>
            <Header name="Contact" />
            <div className={"contact-form contactFormContainer " + theme}>
                    <h2 className={"contactHeader " + theme}>Contact Me</h2><br />
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

                    <a className={"contactEmail " + theme} href={`mailto: ${profileText.email}?subject=I saw your profile`}>{profileText.email}</a>
                <p className={"contactText " + theme}>{profileText.phone} <br/>
                {profileText.location}
                </p>
                {/* <a onClick={onResumeClick} target="_blank" >My Resume</a> */}
            </div>
        </div>
    )
}

export default Contact