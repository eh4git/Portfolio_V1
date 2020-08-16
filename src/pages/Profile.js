import React from "react";
import NavBar from "../components/NavBar"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Resume from "../components/Resume"

const Profile = () => {
    return (
        <>
            <NavBar />
            <h1>Profile</h1>
            <div className='row'>
                <div className='col-md-12'>
                    <AboutMe />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <Skills />
                </div>
                <div className='col-md-5'>
                    <Resume />
                </div>
            </div>

        </>
    )
}

export default Profile