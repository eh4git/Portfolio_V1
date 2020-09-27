import React, {useContext} from "react"
import {Context} from "../context/index"

function Test() {
const {theme, setTheme} = useContext(Context)
    
    const btnClick = (theme) => {
        setTheme(theme)
    }

    return (
        <>
            <label for="themeSlider">Theme</label>
            <input type="range" id="themeSlider" min="0" max="12" step="4" list="theme"/>
            <datalist id="theme">
                <option value="0" label="Light"></option>
                <option value="4" label="Dark"></option>
                <option value="8" label="Refined"></option>
                <option value="12" label="Natural"></option>
            </datalist>
        </>
    )
}

export default Test