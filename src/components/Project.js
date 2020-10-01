import React from "react"   

const Project = (props) => {
    
    return(
        <div className="col-md-6 card" key={props.key}>
        <div className="cardContainer">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">
                    {props.description}<br />
                    <div className="projectBtns" >
                    <a className="btn btn-lg btn-block" target="_blank" href={props.repository}>Github Repository</a>
                    <a className="btn btn-lg btn-block" target="_blank" href={props.deployed}>Deployed Application</a>    
                    </div>
                </p>
            </div>
        </div>
    </div>
    )
}
export default Project