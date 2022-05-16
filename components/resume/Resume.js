import React, { useContext } from "react";
import { Context } from "../../context/index"
import resumeStyle from "./resumeStyles.module.css"
import { Jumbotron, Row, Col } from 'reactstrap';

// import Pdf from "../../public/assets/docs/WebDevResume.pdf";

const Resume = () => {

    const { theme } = useContext(Context)

    let resumeContainerCN;
    let resumeHeaderCN;
    theme === 'light' ? (
        resumeContainerCN = resumeStyle.lightResumeContainer,
        resumeHeaderCN = resumeStyle.lightResumeHeader
    )
        : theme === 'dark' ? (
            resumeContainerCN = resumeStyle.darkResumeContainer,
            resumeHeaderCN = resumeStyle.darkResumeHeader
        )
            : theme === 'refined' ? (
                resumeContainerCN = resumeStyle.refinedResumeContainer,
                resumeHeaderCN = resumeStyle.refinedResumeHeader
            )
                : (
                    resumeContainerCN = resumeStyle.relaxedResumeContainer,
                    resumeHeaderCN = resumeStyle.relaxedResumeHeader
                )

    return (
        <>
            <Jumbotron className={`${resumeStyle.resumeContainer} ${resumeContainerCN}`}>
                <h2 className={`${resumeStyle.resumeHeader} ${resumeHeaderCN}`}>Resume</h2><br />
                <a
                    target="_blank"
                    href="/assets/docs/WebDevResume.pdf"
                >
                    <div className={resumeStyle.resumeFrame} ></div>
                </a>
            </Jumbotron>
        </>
    )
}

export default Resume