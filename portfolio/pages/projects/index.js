import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import profileText from "../../profileText"
import {Context} from "../../context/index"
import Project from "../../components/project/Project"
import Header from "../../components/header/Header"
import projectsStyle from './projectsStyle.module.css'

const Projects = () => {

    const {theme} = useContext(Context)

    let projectsContainerCN;
    theme === 'light' ? projectsContainerCN = projectsStyle.light 
    : theme === 'dark' ? projectsContainerCN = projectsStyle.dark
    : theme === 'refined' ? projectsContainerCN = projectsStyle.refined
    : projectsContainerCN = projectsStyle.relaxed

    return (
        <div className={`${projectsStyle.projectsContainer} ${projectsContainerCN}`}>
            <NavBar />
            <Header name="Projects"/>
            
            <div className={projectsStyle.projectArea}>
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
            </div>
        </div>
    )
}

export default Projects