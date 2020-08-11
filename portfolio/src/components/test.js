import React, { useState } from "react"

function Test() {
    const [count, setCount] = useState(0)

    const btnClick = () => {
        setCount(prevState => prevState + 1)
    }

    if (count === 3) {
        throw new Error('I crashed!')
    }
    return (
        <>
            <h3>This is a test</h3>
            <button onClick={btnClick} > Count ++ </button>
        </>
    )
}

export default Test