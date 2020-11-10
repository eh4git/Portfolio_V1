import React, { useState, useContext } from "react"
import "./index.css"
import { Context } from "../../context/index"

function ThemeSlider() {
    const { theme, sliderValue, onSliderChange } = useContext(Context)
    const themeCapitalized = theme.charAt(0).toUpperCase() + theme.slice(1)
    return (

        <div className={"sliderContainer " + theme}>
            <p className={"sliderText " + theme}>
                Current Theme: {themeCapitalized}
            </p>
            <input
                className={"themeSlider " + theme}
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