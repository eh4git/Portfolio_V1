import React, {useContext} from "react";
import profileText from '../../profileText'
import {Context} from "../../context/index"
// import "./index.css"

const AboutMe = () => {
    const { theme } = useContext(Context)
    return (
            <div className={"aboutMeContainer jumbotron jumbotron-fluid col-md-12 " + theme}>
                <h2 className={"aboutMeHeader " + theme}>About Me</h2><br/>
                <img className={'profilePicture ' + theme} src={profileText.profilePicture} alt="Erik's head shot" />
                    <p className={"portfolioparagraph " + theme}>
                        {profileText.aboutMe}
                    </p>
            </div>
    )
}

export default AboutMe