import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [theme, setTheme] = useState("light")
 
    return (
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}