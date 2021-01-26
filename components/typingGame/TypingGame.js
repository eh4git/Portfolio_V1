import React from "react"
import useTypingGame from "../../hooks/useTypingGame"

const TypingGame = () => {
    const [text, timeRemaining, isTimeRunning, wordCount, textBoxRef, handleChange, calculateWordCount, startGame, endGame] = useTypingGame()
    return(
        <div id="typingGameContainer">
            <h1>How fast do you type?</h1>
            <textarea id="typingGameTextArea"
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4 id="typingGameHeader">Time remaining: {timeRemaining}</h4>
            <button id="typingGameStartBtn"
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