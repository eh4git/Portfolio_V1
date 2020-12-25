import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = useState()
    const [sliderValue, setSliderValue] = useState()

    useEffect(()=>{
        const persistentTheme = window.localStorage.getItem('theme')
        const persistentSliderValue = window.localStorage.getItem('sliderValue')
        persistentTheme ? setTheme(persistentTheme) : setTheme('dark')
        persistentSliderValue ? setSliderValue(persistentSliderValue) : setSliderValue(35)
    },[])

    useEffect(()=>{
        window.localStorage.setItem('theme', theme)
        window.localStorage.setItem('sliderValue', sliderValue)
    },[theme, sliderValue])

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