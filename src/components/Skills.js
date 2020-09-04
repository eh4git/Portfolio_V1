import React from "react";
import profileText from '../assets/profileText'

const Skills = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h2 className="profileSection">Skills</h2><br />
            <div className="row">
                <div className="col-md-6">
                    <h4>Technical</h4>
                    <ul>
                        {profileText.skills.technical.map((item, i) => {
                            return (
                                <li key={i}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4>Other</h4>
                    <ul>
                        {profileText.skills.other.map((item, i) => {
                            return (
                                <li key={i}>
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