import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import profileText from "../../assets/profileText"
import {Context} from "../../context/index"
import Project from "../../components/project/Project"
import Header from "../../components/header/Header"
import "./index.css"

const Projects = () => {
    const {theme} = useContext(Context)
    return (
        <div className={"projectsContainer " + theme}>
            <NavBar />
            <Header name="Projects"/>
            
            <div className={"row projectContainer " + theme}>
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