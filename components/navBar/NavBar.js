import React, { useState, useEffect, useContext } from "react";
import profileText from "../../profileText"
import Link from 'next/link'
import { Context } from "../../context/index"
import navBarStyle from "./navBarStyle.module.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavBar = () => {
    const { theme } = useContext(Context)
    const [inLineStyle, setInlineStyle] = useState()
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        switch (theme) {
            case "light":
                setInlineStyle({ color: "rgb(0, 0, 0)" })
                break;
            case "dark":
                setInlineStyle({ color: "rgb(225, 225, 225)" })
                break;
            case "refined":
                setInlineStyle({ color: "rgb(255, 255, 255)" })
                break;
            default:
                setInlineStyle({ color: "whitesmoke" })
                break;
        }
    }, [theme])

    let navContainerCN;
    let navHeaderCN;
    let navLinkCN;
    let navTogglerCN;
    theme === 'light' ? (
        navContainerCN = navBarStyle.lightNavContainer,
        navHeaderCN = navBarStyle.lightNavHeader,
        navLinkCN = navBarStyle.lightNavLink,
        navTogglerCN = navBarStyle.lightNavToggler
    )
        : theme === 'dark' ? (
            navContainerCN = navBarStyle.darkNavContainer,
            navHeaderCN = navBarStyle.darkNavHeader,
            navLinkCN = navBarStyle.darkNavLink,
            navTogglerCN = navBarStyle.darkNavToggler
        )
            : theme === 'refined' ? (
                navContainerCN = navBarStyle.refinedNavContainer,
                navHeaderCN = navBarStyle.refinedNavHeader,
                navLinkCN = navBarStyle.refinedNavLink,
                navTogglerCN = navBarStyle.refinedNavToggler
            )
                : (
                    navHeaderCN = navBarStyle.relaxedNavHeader,
                    navLinkCN = navBarStyle.relaxedNavLink,
                    navContainerCN = navBarStyle.relaxedNavContainer,
                    navTogglerCN = navBarStyle.relaxedNavToggler
                )

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            className={`${navBarStyle.navBarContainer} ${navContainerCN}`}
            expand="lg"
            dark
        >
            <NavbarBrand
                className={`${navBarStyle.navHeader} ${navHeaderCN}`}
                href={profileText.landingPage}
                style={inLineStyle}
            >
                {profileText.name}
            </NavbarBrand>
            <NavbarToggler className={navTogglerCN} onClick={toggle} />
            <Collapse
                isOpen={isOpen}
                color="dark"
                navbar
            >
                <Nav navbar>
                    {profileText.profileSections.map((item, i) => {
                        return (
                            <NavItem className={`${navBarStyle.navItem}`} key={i}>
                                <Link href={item.href} >
                                    <NavLink style={inLineStyle} className={`${navBarStyle.navLink} ${navLinkCN}`}>
                                        {item.name}
                                    </NavLink>
                                </Link>
                            </NavItem>
                        )
                    })
                    }
                    {profileText.profiles.map((item, i) => {
                        return (
                            <NavItem className={`${navBarStyle.navItem}`} key={i} >
                                <NavLink
                                    className={`${navBarStyle.navLink} ${navLinkCN}`}
                                    href={item.href}
                                    target="_blank"
                                    style={inLineStyle}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        )
                    })
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar