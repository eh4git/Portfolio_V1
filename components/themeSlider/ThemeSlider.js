import React, { useState, useContext } from "react"
import { Context } from "../../context/index"
import themeSliderStyle from "./themeSliderStyles.module.css"

function ThemeSlider() {

    const { theme, sliderValue, onSliderChange } = useContext(Context)
    const themeCapitalized = theme.charAt(0).toUpperCase() + theme.slice(1)
    
    let sliderTextCN;
    let themeSliderCN;
    theme === 'light' ? (
        sliderTextCN = themeSliderStyle.lightSliderText,
        themeSliderCN = themeSliderStyle.lightThemeSlider
    )
        : theme === 'dark' ? (
            sliderTextCN = themeSliderStyle.darkSliderText,
            themeSliderCN = themeSliderStyle.darkThemeSlider
        )
            : theme === 'refined' ? (
                sliderTextCN = themeSliderStyle.refinedSliderText,
                themeSliderCN = themeSliderStyle.refinedThemeSlider
            )
                : (
                    sliderTextCN = themeSliderStyle.relaxedSliderText,
                    themeSliderCN = themeSliderStyle.relaxedThemeSlider
                )

    return (
        <div className={themeSliderStyle.sliderContainer}>
            <p className={`${themeSliderStyle.sliderText} ${sliderTextCN}`}>
                Current Theme:<br/> {themeCapitalized}
            </p>
            <input
                className={`${themeSliderStyle.themeSlider} ${themeSliderCN}`}
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