import React, {useContext} from "react";
import NavBar from "../components/NavBar"
import profileText from "../assets/profileText"
import {Context} from "../context/index"

const Projects = () => {
    const {theme} = useContext(Context)
    return (
        <div>
            <NavBar />
            <h1>Projects</h1>
            <div className="row projectContainer">
                {profileText.projects.map((item, i) => {
                    console.log(item.image)
                    return (
                        <div className="col-md-6 card" key={i}>
                            <div className="cardContainer">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">
                                        {item.description}<br />
                                        <div className="projectBtns" >
                                        <a className="btn btn-lg btn-block" target="_blank" href={item.repository}>Github Repository</a>
                                        <a className="btn btn-lg btn-block" target="_blank" href={item.deployed}>Deployed Application</a>    
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects