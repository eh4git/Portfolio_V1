import React, {useState, useContext} from "react"
import "./index.css"
import {Context} from "../../context/index"

function ThemeSlider() {
    const {theme, setTheme} = useContext(Context)
    const [sliderValue, setSliderValue] = useState(1)
    const onChange = event => {
        setSliderValue(event.target.value)
    }
    sliderValue < 25 ? 
    setTheme("Light") 
    : sliderValue < 50 ?
    setTheme("Dark")
    : sliderValue < 75 ?
    setTheme("Refined")
    :   setTheme("Relaxed")
    
    console.log(sliderValue)
    console.log(theme)
    return (
        <div className="sliderContainer">
            <p className="sliderText">Select A Theme</p>
            <input type="range" min="1" max="100" step="1" value={sliderValue} onChange={onChange} />
        </div>
    )
}
export default ThemeSlider