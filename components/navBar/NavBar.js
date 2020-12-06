import React, { useState, useEffect, useContext } from "react";
import profileText from "../../profileText"
import Link from 'next/link'
import { Context } from "../../context/index"
import navBarStyle from "./navBarStyle.module.css"

const NavBar = () => {
    const [navClassName, setNavClassName] = useState("navbar navbar-expand-lg navbar-light bg-light")
    const [inLineStyle, setInlineStyle] = useState()
    const { theme } = useContext(Context)

    useEffect(() => {
        //uses the light and dark bootstrap pre-built nav bar
        switch (theme) {
            case "light":
                setNavClassName("navbar navbar-expand-lg navbar-light bg-light")
                setInlineStyle(null)
                break;
            case "dark":
                setNavClassName("navbar navbar-expand-lg navbar-dark bg-dark")
                setInlineStyle(null)
                break;
            case "refined":
                setNavClassName("navbar navbar-expand-lg refined bg-light")
                setInlineStyle({ color: "rgb(0, 0, 0)" })
                break;
            default:
                setNavClassName("navbar navbar-expand-lg relaxed bg-dark")
                setInlineStyle({ color: "whitesmoke" })
                break;
        }
    }, [theme])

    let navContainerCN;
    let navHeaderCN;
    let navLinkCN;
    let navTogglerCN;
    theme === 'light' ? (
        navHeaderCN = navBarStyle.lightNavHeader,
        navLinkCN = navBarStyle.lightNavLink
    )
        : theme === 'dark' ? (
            navHeaderCN = navBarStyle.darkNavHeader,
            navLinkCN = navBarStyle.darkNavLink
        )
            : theme === 'refined' ? (
                navHeaderCN = navBarStyle.refinedNavHeader,
                navLinkCN = navBarStyle.refinedNavLink,
                navContainerCN = navBarStyle.refinedNavContainer,
                navTogglerCN = navBarStyle.refinedNavToggler
            )
                : (
                    navHeaderCN = navBarStyle.relaxedNavHeader,
                    navLinkCN = navBarStyle.relaxedNavLink,
                    navContainerCN = navBarStyle.relaxedNavContainer,
                    navTogglerCN = navBarStyle.relaxedNavToggler
                )

    return (
        <nav className={`${navBarStyle.navBarContainer} ${navContainerCN} ${navClassName}`}>
            <a className={`${navBarStyle.navHeader} ${navHeaderCN} navbar-brand nav-header`} href={profileText.landingPage} style={inLineStyle}>{profileText.name}</a>
            <button className={`${navTogglerCN} navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {profileText.profileSections.map((item, i) => {
                        return (
                            <li className={`${navBarStyle.navItem} nav-item active`} key={i}>
                                <Link href={item.href} >
                                    <a style={inLineStyle} className={`${navBarStyle.navLink} ${navLinkCN} nav-link`}>
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                    }
                    {profileText.profiles.map((item, i) => {
                        return (
                            <li className={`${navBarStyle.navItem} nav-item`} key={i} >
                                <a className={`${navBarStyle.navLink} ${navLinkCN} nav-link`} href={item.href} rel="noopener noreferrer" target="_blank" style={inLineStyle}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar