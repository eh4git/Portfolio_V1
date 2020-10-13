import React, {useContext} from "react"  
import { Context } from "../../context/index"
import "./index.css" 

const Project = (props) => {  
    const { theme } = useContext(Context)
    return(
        <div className={"col-md-6 card " + theme}>
            <div className="cardContainer">
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">
                    {props.description}
                    </p>
                    <div className="projectBtns row" >
                        <a className="btn btn-lg btn-block col-md-6 projectBtn" target="_blank" href={props.repository}>Github Repository</a>
                        { props.deployed 
                            ? <a className="btn btn-lg btn-block col-md-5 projectBtn" target="_blank" href={props.deployed}>Deployed Application</a> 
                            : <a className="btn btn-lg btn-block col-md-5 projectBtn" disabled>Application Not Deployed</a>
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project