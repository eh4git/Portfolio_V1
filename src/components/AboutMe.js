import React from "react";
import profileText from '../assets/profileText'

const AboutMe = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid col-md-12">
                <h2 className="profileSection">About Me</h2><br/>
                <img id='profilePicture' src={profileText.profilePicture} alt="Erik head shot" />
                    <p className="portfolioparagraph">
                        {profileText.aboutMe}
                    </p>
            </div>
        </>
    )
}

export default AboutMe