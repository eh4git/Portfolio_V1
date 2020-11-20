import React from "react";
import Link from 'next/link'
import Pdf from "../public/assets/docs/WebDevResume.pdf";
import Docx from "../public/assets/docs/WebDevResume.docx"
import profileText from "../profileText"
import landPage from "../styles/landingPage.module.css";

function LandingPage(props) {

  const onPdfClick = () => {
    window.open(Pdf);
  }

  const onDocxClick = () => {
    window.location.replace(Docx);
  }

  return (
    <div className={landPage.wrapper}>
      <section className={landPage.parallaxContainer}>
        <div className={landPage.parallax}>
          <div className={landPage.logo}>
            <div className={`${landPage.line} ${landPage.topLine}`}></div>
            <div className={landPage.content}>
              <div className={`${landPage.logo} ${landPage.vintage}`}>Erik Hirsch</div>
              <div className={landPage.since}>- Est. 2020 -</div>
              <div className={landPage.desc}>Full-Stack Web Developer</div>
              <div className={landPage.skills}>HTML&nbsp;+&nbsp;CSS&nbsp;+&nbsp;JS</div>
              <div className={landPage.links}>
                <a
                  className={`${landPage.linkOne} ${landPage.links}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profileText.profiles[0].href}
                >
                  <i className='fab fa-linkedin'></i>
                </a>
                <a
                  className={`${landPage.linkTwo} ${landPage.links}`}
                  target="_blank" rel="noopener noreferrer"
                  href={profileText.profiles[1].href}
                >
                  <i className='fab fa-github'></i>
                </a>
                <a
                  className={`${landPage.linkThree} ${landPage.links}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onPdfClick}
                >
                  <i className='far fa-file-pdf'></i>
                </a>
                <a
                  className={`${landPage.linkFour} ${landPage.links}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onDocxClick}
                >
                  <i className='far fa-file-word'></i>
                </a>
                {/* <a target="_blank" href={profileText.profiles[2].href}><i className={`${landPage.linkOne} fa fa-codepen`}></i></a> */}
              </div>
            </div>
            <div className={`${landPage.line} ${landPage.bottomLine}`}></div>
            <div className={landPage.buttonInsertSpace}>
              <Link href={profileText.profileSections[0].href} >
                <a className={landPage.viewProfileBtn} >View Profile</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default LandingPage;

