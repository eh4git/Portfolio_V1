import React, { useContext } from "react";
import profileText from '../../profileText'
import { Context } from "../../context/index"
import aboutMeStyle from './aboutMeStyles.module.css'
import Image from 'next/image'

const AboutMe = () => {

    const { theme } = useContext(Context)

    let aboutMeContainerCN;
    let aboutMeHeaderCN;
    let profilePictureCN;
    let portfolioParagraphCN;
    theme === 'light' ? (
        aboutMeContainerCN = aboutMeStyle.lightAboutMeContainer,
        aboutMeHeaderCN = aboutMeStyle.lightAboutMeHeader,
        profilePictureCN = aboutMeStyle.lightProfilePicture,
        portfolioParagraphCN = aboutMeStyle.lightPortfolioParagraph
    )
        : theme === 'dark' ? (
            aboutMeContainerCN = aboutMeStyle.darkAboutMeContainer,
            aboutMeHeaderCN = aboutMeStyle.darkAboutMeHeader,
            profilePictureCN = aboutMeStyle.darkProfilePicture,
            portfolioParagraphCN = aboutMeStyle.darkPortfolioParagraph
        )
            : theme === 'refined' ? (
                aboutMeContainerCN = aboutMeStyle.refinedAboutMeContainer,
                aboutMeHeaderCN = aboutMeStyle.refinedAboutMeHeader,
                profilePictureCN = aboutMeStyle.refinedProfilePicture,
                portfolioParagraphCN = aboutMeStyle.refinedPortfolioParagraph
            )
                : (
                    aboutMeContainerCN = aboutMeStyle.relaxedAboutMeContainer,
                    aboutMeHeaderCN = aboutMeStyle.relaxedAboutMeHeader,
                    profilePictureCN = aboutMeStyle.relaxedProfilePicture,
                    portfolioParagraphCN = aboutMeStyle.relaxedPortfolioParagraph
                )

    return (
        <div className={`${aboutMeStyle.aboutMeContainer} ${aboutMeContainerCN} jumbotron jumbotron-fluid col-md-12`}>
            <h2 className={`${aboutMeStyle.aboutMeHeader} ${aboutMeHeaderCN}`}>About Me</h2><br />
            <div className={`${aboutMeStyle.profilePicture} ${profilePictureCN}`}>
                <Image
                    className={`${aboutMeStyle.profilePicture} ${profilePictureCN}`}
                    src={profileText.profilePicture}
                    alt="Picture of Erik Hirsch"
                    width={850}
                    height={600}
                    layout="responsive"
                />
            </div>
                <p className={`${aboutMeStyle.portfolioparagraph} ${portfolioParagraphCN}`}>
                    {profileText.aboutMe}
                </p>
        </div>
    )
}

export default AboutMe