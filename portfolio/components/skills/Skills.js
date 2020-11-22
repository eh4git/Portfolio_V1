import React, { useContext } from "react";
import profileText from '../../profileText'
import { Context } from "../../context/index"
import skillsStyle from "./skillsStyles.module.css"

const Skills = () => {

    const { theme } = useContext(Context)

    let skillsContainerCN;
    let skillsHeaderCN;
    let skillsSubHeaderCN;
    let skillCN;
    theme === 'light' ? (
        skillsContainerCN = skillsStyle.lightSkillsContainer,
        skillsHeaderCN = skillsStyle.lightSkillsHeader,
        skillsSubHeaderCN = skillsStyle.lightSkillsSubHeader,
        skillCN = skillsStyle.lightSkill
    )
        : theme === 'dark' ? (
            skillsContainerCN = skillsStyle.darkSkillsContainer,
            skillsHeaderCN = skillsStyle.darkSkillsHeader,
            skillsSubHeaderCN = skillsStyle.darkSkillsSubHeader,
            skillCN = skillsStyle.darkSkill
        )
            : theme === 'refined' ? (
                skillsContainerCN = skillsStyle.refinedSkillsContainer,
                skillsHeaderCN = skillsStyle.refinedSkillsHeader,
                skillsSubHeaderCN = skillsStyle.refinedSkillsSubHeader,
                skillCN = skillsStyle.refinedSkill
            )
                : (
                    skillsContainerCN = skillsStyle.relaxedSkillsContainer,
                    skillsHeaderCN = skillsStyle.relaxedSkillsHeader,
                    skillsSubHeaderCN = skillsStyle.relaxedSkillsSubHeader,
                    skillCN = skillsStyle.relaxedSkill
                )

    return (
        <div className={`${skillsStyle.skillsContainer} ${skillsContainerCN} jumbotron jumbotron-fluid`}>
            <h2 className={`${skillsStyle.skillsHeader} ${skillsHeaderCN}`}>Skills</h2><br />
            <div className="row">
                <div className="col-md-6">
                    <h4 className={`${skillsStyle.skillsSubHeader} ${skillsSubHeaderCN}`}>Technical</h4>
                    <ul>
                        {profileText.skills.technical.map((item, i) => {
                            return (
                                <li key={i} 
                                    className={`${skillsStyle.skill} ${skillCN}`}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4 className={`${skillsStyle.skillsSubHeader} ${skillsSubHeaderCN}`}>Other</h4>
                    <ul>
                        {profileText.skills.other.map((item, i) => {
                            return (
                                <li key={i}
                                className={`${skillsStyle.skill} ${skillCN}`}
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