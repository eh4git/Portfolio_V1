import React, {useState, useContext} from "react"
import "./index.css"
import {Context} from "../../context/index"

function ThemeSlider() {
    const {theme, sliderValue, onSliderChange} = useContext(Context)
   console.log(typeof theme)
    return (
        <div className={"sliderContainer " + theme}>
            <p className={"sliderText " + theme}>Select A Theme</p>
            <input 
                className={"themeSlider" + theme} 
                type="range" 
                min="1" 
                max="100" 
                step="1" 
                value={sliderValue} 
                onChange={onSliderChange} 
            />
        </div>
    )
}
export default ThemeSlider