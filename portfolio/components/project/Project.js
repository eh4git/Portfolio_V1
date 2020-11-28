import React, { useContext } from "react"
import { Context } from "../../context/index"
import Image from 'next/image'
import projectStyle from "./projectStyles.module.css"

const Project = (props) => {

    const { theme } = useContext(Context)

    let cardContainerCN;
    let projectImageCN;
    let projectHeaderCN;
    let cardTextCN;
    let projectBtnCN;
    theme === 'light' ? (
        cardContainerCN = projectStyle.lightCardContainer,
        projectImageCN = projectStyle.lightProjectImage,
        projectHeaderCN = projectStyle.lightProjectHeader,
        cardTextCN = projectStyle.lightCardText,
        projectBtnCN = projectStyle.lightProjectBtn
    )
        : theme === 'dark' ? (
            cardContainerCN = projectStyle.darkCardContainer,
            projectImageCN = projectStyle.darkProjectImage,
            projectHeaderCN = projectStyle.darkProjectHeader,
            cardTextCN = projectStyle.darkCardText,
            projectBtnCN = projectStyle.darkProjectBtn
        )
            : theme === 'refined' ? (
                cardContainerCN = projectStyle.refinedCardContainer,
                projectImageCN = projectStyle.refinedProjectImage,
                projectHeaderCN = projectStyle.refinedProjectHeader,
                cardTextCN = projectStyle.refinedCardText,
                projectBtnCN = projectStyle.refinedProjectBtn
            )
                : (
                    cardContainerCN = projectStyle.relaxedCardContainer,
                    projectImageCN = projectStyle.relaxedProjectImage,
                    projectHeaderCN = projectStyle.relaxedProjectHeader,
                    cardTextCN = projectStyle.relaxedCardText,
                    projectBtnCN = projectStyle.relaxedProjectBtn
                )

    return (
        <div className={`${projectStyle.projectContainer} col-md-6`}>
            <div className={`${projectStyle.cardContainer} ${cardContainerCN}`}>
               
                    <Image
                        src={props.image}
                        className={projectImageCN}
                        alt={props.name}
                        width={800}
                        height={450}

                    />
          
                <div className={`${projectStyle.projectTextContainer} card-body`}>
                    <h4 className={`${projectStyle.projectHeader} ${projectHeaderCN} card-title`}>{props.name}</h4>
                    <p className={`${cardTextCN} card-text`}>
                        {props.description}
                    </p>
                    <div className="row" >
                        <a
                            className={`${projectStyle.projectBtn} ${projectBtnCN} btn btn-lg col-md-5`}
                            target="_blank"
                            href={props.repository}
                        >
                            Github Repository
                        </a>
                        {props.deployed
                            ? <a
                                className={`${projectStyle.projectBtn} ${projectBtnCN} btn btn-lg col-md-5`}
                                target="_blank"
                                href={props.deployed}
                            >
                                Deployed Application
                            </a>
                            : <a
                                className={`${projectStyle.projectBtn} ${projectBtnCN} btn btn-lg col-md-5`}
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