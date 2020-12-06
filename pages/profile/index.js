import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import AboutMe from "../../components/aboutMe/AboutMe"
import Skills from "../../components/skills/Skills"
import Resume from "../../components/resume/Resume"
import Header from "../../components/header/Header"
import {Context}  from "../../context/index"
import profileStyle from "./profileStyle.module.css"

const Profile = () => {

    const { theme } = useContext(Context)
    
    let profileContainerCN;
    theme === 'light' ? profileContainerCN = profileStyle.light 
    : theme === 'dark' ? profileContainerCN = profileStyle.dark
    : theme === 'refined' ? profileContainerCN = profileStyle.refined
    : profileContainerCN = profileStyle.relaxed

    return (
        <div className={`${profileStyle.profileContainer} ${profileContainerCN}`}>
            <NavBar />
            <Header name="Profile"/>
            <div className='row'>
                <div className='col-12'>
                    <AboutMe />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 col-xl-7'>
                    <Skills />
                </div>
                <div className='col-lg-12 col-xl-5'>
                    <Resume />
                </div>
            </div>
        </div>
    )
}

export default Profile