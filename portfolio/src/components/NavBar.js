import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <h1>NavBar</h1>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </>
    )
}

export default NavBar