import React, { useContext } from "react";
import { Context } from "../../context/index"
import resumeStyle from "./resumeStyles.module.css"

import Pdf from "../../public/assets/docs/WebDevResume.pdf";

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
            <div className={`${resumeStyle.resumeContainer} ${resumeContainerCN} jumbotron jumbotron-fluid col-md-12`}>
                <h2 className={`${resumeStyle.resumeHeader} ${resumeHeaderCN}`}>Resume</h2><br />
                <a

                    target="_blank"
                    onClick={() => {
                        console.log("Need to figure out pdf viewer")
                        window.open(Pdf);
                    }}
                >
                    <div className={resumeStyle.resumeFrame} style={{height: '300px'}}></div>
                </a>
            </div>
        </>
    )
}

export default Resume