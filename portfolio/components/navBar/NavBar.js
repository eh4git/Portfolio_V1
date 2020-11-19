import React, {useState, useEffect, useContext} from "react";
import profileText from "../../profileText"
import Link from 'next/link'
import {Context} from "../../context/index"
// import "./index.css"

const NavBar = () => {
    const [navClassName, setNavClassName] = useState("navbar navbar-expand-lg navbar-light bg-light")
    const [inLineStyle, setInlineStyle] = useState()
    const {theme} = useContext(Context)

    useEffect(() => {
        //uses the light and dark bootstrap pre-built nav bar
        switch(theme){
            case "light":
                setNavClassName("navbar navbar-expand-lg navbar-light bg-light") 
                setInlineStyle(null)
                break;
            case "dark":
                setNavClassName("navbar navbar-expand-lg navbar-dark bg-dark")
                setInlineStyle(null)
                break;
            case "refined":
                setNavClassName("navbar navbar-expand-lg refined")
                setInlineStyle({color: "rgb(255, 255, 255)"})
                break;
            default:    
                setNavClassName("navbar navbar-expand-lg relaxed")
                setInlineStyle({color: " whitesmoke"})
                break;
        }
    },[theme])

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
                                <Link className={"nav-link " + theme} href={item.href} style={inLineStyle}>
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