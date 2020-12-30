import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import AboutMe from "../../components/aboutMe/AboutMe"
import Skills from "../../components/skills/Skills"
import Resume from "../../components/resume/Resume"
import Header from "../../components/header/Header"
import {Context}  from "../../context/index"
import profileStyle from "./profileStyle.module.css"
import HeadText from "../../components/headText/headText";
import { Row, Col } from 'reactstrap';

const Profile = () => {

    const { theme } = useContext(Context)
    
    let profileContainerCN;
    theme === 'light' ? profileContainerCN = profileStyle.light 
    : theme === 'dark' ? profileContainerCN = profileStyle.dark
    : theme === 'refined' ? profileContainerCN = profileStyle.refined
    : profileContainerCN = profileStyle.relaxed

    return (
        <div className={`${profileStyle.profileContainer} ${profileContainerCN}`}>
            <HeadText title="Profile"/>
            <NavBar />
            <Header name="Profile"/>
            <Row>
                <Col>
                    <AboutMe />
                </Col>
            </Row>
            <Row xs="1" lg="2">
                <Col>
                    <Skills />
                </Col>
                <Col>
                    <Resume />
                </Col>
            </Row>
        </div>
    )
}

export default Profile