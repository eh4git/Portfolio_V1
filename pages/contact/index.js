import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import profileText from "../../profileText"
import {Context} from "../../context/index"
import Header from "../../components/header/Header"
import contactStyle from './contactStyles.module.css'
import HeadText from "../../components/headText/headText";

const Contact = () => {

   const {theme} = useContext(Context)

    let name;
    theme === 'light' ? name = `${contactStyle.light}${name}` 
    : theme === 'dark' ? name = `${contactStyle.dark}${name}`
    : theme === 'refined' ? name = `${contactStyle.refined}${name}`
    : name = `${contactStyle.relaxed}${name}`
    


let contactContainerCN;
let contactFormContainerCN;
let contactHeaderCN;
let contactEmailCN;
let contactTextCN;
   theme === 'light' ? (
       contactContainerCN = contactStyle.lightContainer, contactFormContainerCN = contactStyle.lightContactFormContainer,
       contactHeaderCN = contactStyle.lightContactHeader,
       contactEmailCN = contactStyle.lightContactEmail,
       contactTextCN = contactStyle.lightContactText
       )
   : theme === 'dark' ? (
       contactContainerCN = contactStyle.darkContainer,
       contactFormContainerCN = contactStyle.darkContactFormContainer,
       contactHeaderCN = contactStyle.darkContactHeader,
       contactEmailCN = contactStyle.darkContactEmail,
       contactTextCN = contactStyle.darkContactText
       )
   : theme === 'refined' ? (
       contactContainerCN = contactStyle.refinedContainer,
       contactFormContainerCN = contactStyle.refinedContactFormContainer,
       contactHeaderCN = contactStyle.refinedContactHeader,
       contactEmailCN = contactStyle.refinedContactEmail,
       contactTextCN = contactStyle.refinedContactText
    )
   : (
       contactContainerCN = contactStyle.relaxedContainer,
       contactFormContainerCN = contactStyle.relaxedContactFormContainer,
       contactHeaderCN = contactStyle.relaxedContactHeader,
       contactEmailCN = contactStyle.relaxedContactEmail,
       contactTextCN = contactStyle.relaxedContactText
    )

    return(
        <div className={`${contactStyle.contactContainer} ${contactContainerCN}`}>
            <HeadText title="Contact Me"/>
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
                {/* <a href="/assets/docs/WebDevResume.pdf" target="_blank" >My Resume</a> */}
            </div>
        </div>
    )
}

export default Contact