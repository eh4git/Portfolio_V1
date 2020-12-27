import React, { useContext } from "react";
import NavBar from "../../components/navBar/NavBar"
import profileText from "../../profileText"
import { Context } from "../../context/index"
import Project from "../../components/project/Project"
import Header from "../../components/header/Header"
import projectsStyle from './projectsStyle.module.css'
import HeadText from "../../components/headText/headText";
import { Row, Col } from 'reactstrap';

const Projects = () => {

    const {theme} = useContext(Context)

    let projectsContainerCN;
    theme === 'light' ? projectsContainerCN = projectsStyle.light 
    : theme === 'dark' ? projectsContainerCN = projectsStyle.dark
    : theme === 'refined' ? projectsContainerCN = projectsStyle.refined
    : projectsContainerCN = projectsStyle.relaxed

    return (
        <div className={`${projectsStyle.projectsContainer} ${projectsContainerCN}`}>
            <HeadText title="Projects" />
            <NavBar />
            <Header name="Projects"/>
            
            <Row xs='1' lg='2'className={projectsStyle.projectArea}>
                {profileText.projects.map((item, i) => 
                    <Project 
                        key={i}
                        image={item.image}
                        name={item.name} 
                        description={item.description} 
                        repository={item.repository} 
                        deployed={item.deployed} 
                    />
                )}
            </Row>
        </div>
    )
}

export default Projects