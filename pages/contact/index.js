import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
// import Pdf from "../../assets/docs/WebDevResume.pdf";
import profileText from "../../profileText"
import {Context} from "../../context/index"
import Header from "../../components/header/Header"
import contactStyle from './contactStyles.module.css'

const Contact = () => {

   const {theme} = useContext(Context)

function createClassName(theme, className){
    let name;
    theme === 'light' ? name = `${contactStyle.light}${className}` 
    : theme === 'dark' ? name = contactStyle.dark + className
    : theme === 'refined' ? name = contactStyle.refined + className
    : name = contactStyle.relaxed + className
    return name;
}

let contactContainerCN;
let contactFormContainerCN;
let contactHeaderCN;
let contactEmailCN;
let contactTextCN;
   theme === 'light' ? (
       contactContainerCN = contactStyle.lightContainer, contactFormContainerCN = contactStyle.lightContactFormContainer,
       contactHeaderCN = contactStyle.lightContactHeader,
       contactEmailCN = contactStyle.lightContactEmail,
       contactEmailCN = contactStyle.lightContactEmail
       )
   : theme === 'dark' ? (
       contactContainerCN = contactStyle.darkContainer,
       contactFormContainerCN = contactStyle.darkContactFormContainer,
       contactHeaderCN = contactStyle.darkContactHeader,
       contactEmailCN = contactStyle.darkContactEmail,
       contactEmailCN = contactStyle.darkContactEmail
       )
   : theme === 'refined' ? (
       contactContainerCN = contactStyle.refinedContainer,
       contactFormContainerCN = contactStyle.refinedContactFormContainer,
       contactHeaderCN = contactStyle.refinedContactHeader,
       contactEmailCN = contactStyle.refinedContactEmail,
       contactEmailCN = contactStyle.refinedContactEmail
    )
   : (
       contactContainerCN = contactStyle.relaxedContainer,
       contactFormContainerCN = contactStyle.relaxedContactFormContainer,
       contactHeaderCN = contactStyle.relaxedContactHeader,
       contactEmailCN = contactStyle.relaxedContactEmail,
       contactEmailCN = contactStyle.relaxedContactEmail
    )

     const onResumeClick= ()=> {
         console.log("need to fix pdf import or find work-around")
    //   window.open(Pdf);
    }

    return(
        <div className={`${contactStyle.contactContainer} ${contactContainerCN}`}>
            <NavBar/>
            <Header name="Contact" />
            <div className={`${contactStyle.contactFormContainer} ${contactFormContainerCN}`}>
                    <h2 className={`${contactStyle.contactHeader} ${contactHeaderCN}`}>Contact Me</h2><br />
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
                    <a className={`${contactStyle.contactEmail} ${contactEmailCN}`} href={`mailto: ${profileText.email}?subject=I saw your profile`}>{profileText.email}</a>
                <p className={`${contactStyle.contactText} ${contactTextCN}`}>{profileText.phone} <br/>
                {profileText.location}
                </p>
                {/* <a onClick={onResumeClick} target="_blank" >My Resume</a> */}
            </div>
        </div>
    )
}

export default Contact