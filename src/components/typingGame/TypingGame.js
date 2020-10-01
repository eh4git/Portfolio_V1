import React from "react"
import useTypingGame from "../../hooks/useTypingGame"
import "./index.css"

const TypingGame = () => {
    const [text, timeRemaining, isTimeRunning, wordCount, textBoxRef, handleChange, calculateWordCount, startGame, endGame] = useTypingGame()
    return(
        <div className="typingGameContainer">
            <h1>How fast do you type?</h1>
            <textarea id="typingtextarea"
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}
export default TypingGame