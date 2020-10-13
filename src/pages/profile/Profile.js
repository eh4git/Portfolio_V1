import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import AboutMe from "../../components/aboutMe/AboutMe"
import Skills from "../../components/skills/Skills"
import Resume from "../../components/resume/Resume"
import Header from "../../components/header/Header"
import { Context } from "../../context/index"
import "./index.css"

const Profile = () => {
    const { theme } = useContext(Context)
    return (
        <div className={"profileContainer " + theme}>
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
        </div>
    )
}

export default Profile