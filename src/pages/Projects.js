import React from "react";
import NavBar from "../components/NavBar"
import profileText from "../assets/profileText"

const Projects = () => {
    return(
        <>
        <NavBar/>
        <h1>Projects</h1>
        <div>
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
                                            {item.description}<br/>
                                            <a href={item.repository}>Github Repository</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects