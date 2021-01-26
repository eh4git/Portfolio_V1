import React from "react";
import Link from 'next/link'
import profileText from "../profileText"
import landPage from "../styles/landingPage.module.css";
import HeadText from "../components/headText/headText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'

function LandingPage() {

  return (
    <div className={landPage.wrapper}>
      <HeadText title="Welcome" />
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
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  className={`${landPage.linkTwo} ${landPage.links}`}
                  target="_blank" rel="noopener noreferrer"
                  href={profileText.profiles[1].href}
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="/assets/docs/WebDevResume.pdf" target="_blank" className={`${landPage.linkThree} ${landPage.links}`} >
                  <FontAwesomeIcon icon={faFilePdf} size="lg" />
                </a>

                <a href="/assets/docs/WebDevResume.docx" download="ErikHirschResume" className={`${landPage.linkFour} ${landPage.links}`} >
                  <FontAwesomeIcon icon={faFileWord} size="lg" />
                </a>
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

