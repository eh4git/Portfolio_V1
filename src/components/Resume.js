import React from "react";

import Pdf from "../assets/docs/WebDevResume.pdf";
const Resume = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid col-md-12">
                <h2 className="profileSection">Resume</h2><br />
                <a
                    target="_blank"
                    onClick={() => {
                        window.open(Pdf);
                    }}
                >
                    <div id="resumeFrame"></div>
                </a>
            </div>
        </>
    )
}

export default Resume