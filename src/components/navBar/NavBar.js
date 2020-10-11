import React, {useState, useEffect, useContext} from "react";
import profileText from "../../assets/profileText"
import { Link } from "react-router-dom"
import {Context} from "../../context/index"
import "./index.css"
import { color } from "d3";


const NavBar = () => {

    const [navClassName, setNavClassName] = useState("navbar navbar-expand-lg navbar-light bg-light")
    const [inLineStyle, setInlineStyle] = useState()

    const {theme} = useContext(Context)

    useEffect(() => {
        theme === "light" ? setNavClassName("navbar navbar-expand-lg navbar-light bg-light")
        : theme === "dark" ? setNavClassName("navbar navbar-expand-lg navbar-dark bg-dark")
        : theme === "refined" ? setNavClassName("navbar navbar-expand-lg refined")
        : setNavClassName("navbar navbar-expand-lg relaxed")
    },[theme])

    useEffect(() => {
        theme === "light" ? setInlineStyle(null)
        : theme === "dark" ? setInlineStyle(null)
        : theme === "refined" ? setInlineStyle({color: "rgb(255, 255, 255)"})
        : setInlineStyle({color: " whitesmoke"})
    },[navClassName])

    return (
        <nav id="nav" className={navClassName}>
            <a className={"navbar-brand nav-header " + theme} href={profileText.landingPage} style={inLineStyle}>{profileText.name}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {profileText.profileSections.map((item, i) => {
                        return (
                            <li className={"nav-item active" + theme} key={i}>
                                <Link className={"nav-link " + theme} to={item.href} style={inLineStyle}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                    }
                    {profileText.profiles.map((item, i) => {
                        return (
                            <li className={"nav-item " + theme} key={i} >
                                <a className={"nav-link " + theme} href={item.href} rel="noopener noreferrer" target="_blank" style={inLineStyle}>
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