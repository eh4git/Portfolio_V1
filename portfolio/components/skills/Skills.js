import React, { useContext } from "react";
import profileText from '../../profileText'
import { Context } from "../../context/index"
// import "./index.css"

const Skills = () => {
    const { theme } = useContext(Context)
    return (
        <div className={"skillsContainer jumbotron jumbotron-fluid " + theme}>
            <h2 className={"skillsHeader " + theme}>Skills</h2><br />
            <div className="row">
                <div className="col-md-6">
                    <h4 className={"skillsSubHeader " + theme}>Technical</h4>
                    <ul>
                        {profileText.skills.technical.map((item, i) => {
                            return (
                                <li key={i} 
                                    className={"skill " + theme}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4 className={"skillsSubHeader " + theme}>Other</h4>
                    <ul>
                        {profileText.skills.other.map((item, i) => {
                            return (
                                <li key={i}
                                className={"skill " + theme}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Skills