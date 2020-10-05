import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = useState("light")
    const [sliderValue, setSliderValue] = useState(1)
    
    const onSliderChange = event => {
        setSliderValue(event.target.value)
        sliderValue < 25 ? 
            setTheme("light") 
        : sliderValue < 50 ?
            setTheme("dark")
        : sliderValue < 75 ?
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