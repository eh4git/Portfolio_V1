import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = useState("light")
    const [sliderValue, setSliderValue] = useState(1)
    
    const onSliderChange = event => {
        const currentValue = event.target.value
        setSliderValue(currentValue)
        //setting the slider value ^ is async causing the following conditional to run before the value is set into state. Still set state but use the event value to ensure correct value is being used to set the theme.
        currentValue < 25 ? 
            setTheme("light") 
        : currentValue < 50 ?
            setTheme("dark")
        : currentValue < 75 ?
            setTheme("refined")
        :   setTheme("relaxed")
    }
 
    return (
        <Context.Provider value={{theme, setTheme, sliderValue, setSliderValue, onSliderChange}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}