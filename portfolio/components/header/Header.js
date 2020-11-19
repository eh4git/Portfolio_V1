import React, {useContext} from "react"
import ThemeSlider from "../../components/themeSlider/ThemeSlider";
import {Context} from "../../context/index"
// import "./index.css"

const Header = props => {
    const {theme} = useContext(Context)
    return(
        <div className={"headerContainer " + theme}>
            <h1 className={"headerText " + theme}>
                {props.name}
            </h1> 
            <ThemeSlider />
        </div>
    )
}

export default Header