import React, {useContext} from "react"  
import { Context } from "../../context/index"
import Image from 'next/image'
// import "./index.css" 

const Project = (props) => {  
    const { theme } = useContext(Context)
    return(
        <div className={"projectContainer col-md-6 card " + theme}>
            <div className={"cardContainer " + theme}>
                <Image
                    src={props.image} 
                    className={"projectImage card-img-top " + theme} 
                    alt={props.name} 
                    width={250}
                    height={250}
                />
                <div className="projectTextContainer card-body">
                    <h4 className={"card-title projectHeader " + theme}>{props.name}</h4>
                    <p className={"card-text " + theme}>
                    {props.description}
                    </p>
                    <div className={"projectBtns row " + theme} >
                        <a 
                            className={"btn btn-lg col-md-5 projectBtn " + theme} 
                            target="_blank" 
                            href={props.repository}>Github Repository
                        </a>
                        { props.deployed 
                            ? <a 
                                className={"btn btn-lg col-md-5 projectBtn " + theme} 
                                target="_blank" 
                                href={props.deployed}
                            >
                                Deployed Application
                            </a> 
                            : <a 
                                className={"btn btn-lg col-md-5 projectBtn " + theme} 
                                disabled>Application Not Deployed
                            </a>
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project