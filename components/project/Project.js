import React, { useContext } from "react"
import { Context } from "../../context/index"
import Image from 'next/image'
import projectStyle from "./projectStyles.module.css"
import {
    CardText, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';

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
        <Col className={`${projectStyle.projectContainer}`}>
            <div className={`${projectStyle.cardContainer} ${cardContainerCN}`}>
                <div className={`${projectStyle.projectImageContainer} ${projectImageCN}`}>
                    <Image
                        src={props.image}
                        className={projectImageCN}
                        alt={props.name}
                        width={800}
                        height={450}
                        layout="responsive"
                    />
                </div>
                <CardBody className={`${projectStyle.projectTextContainer}`}>
                    <CardTitle className={`${projectStyle.projectHeader} ${projectHeaderCN}`}>{props.name}</CardTitle>
                    <CardText className={`${cardTextCN}`}>
                        {props.description}
                    </CardText>
                    <Row lg='1' xl='2' className={`${projectStyle.projectBtnGroup}`} >
                        <Col >
                            <Button
                                size="lg"
                                className={`${projectStyle.projectBtn} ${projectBtnCN}`}
                                target="_blank"
                                href={props.repository}
                                block
                            >
                                Github Repository
                            </Button>
                        </Col>
                        <Col >
                            {props.deployed
                                ? <Button
                                    size="lg"
                                    className={`${projectStyle.projectBtn} ${projectBtnCN}`}
                                    target="_blank"
                                    href={props.deployed}
                                    block
                                >
                                    Deployed Application
                                </Button>
                                : <Button
                                    size="lg"
                                    className={`${projectStyle.projectBtn} ${projectBtnCN}`}
                                    disabled
                                    block
                                >
                                    Application Not Deployed
                                </Button>
                            }
                        </Col>

                    </Row>
                </CardBody>
            </div>
        </Col>
    )
}
export default Project