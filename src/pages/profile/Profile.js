import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import AboutMe from "../../components/AboutMe"
import Skills from "../../components/Skills"
import Resume from "../../components/Resume"
import Header from "../../components/header/Header"
import "./index.css"

const Profile = () => {
    return (
        <>
            <NavBar />
            <Header name="Profile"/>
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