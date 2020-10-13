import React, { useContext } from "react";
import { Context } from "../../context/index"
import "./index.css"

import Pdf from "../../assets/docs/WebDevResume.pdf";
const Resume = () => {
    const { theme } = useContext(Context)
    return (
        <>
            <div className={"resumeContainer jumbotron jumbotron-fluid col-md-12 " + theme}>
                <h2 className={"resumeHeader " + theme}>Resume</h2><br />
                <a

                    target="_blank"
                    onClick={() => {
                        window.open(Pdf);
                    }}
                >
                    <div className={"resumeFrame " + theme}></div>
                </a>
            </div>
        </>
    )
}

export default Resume