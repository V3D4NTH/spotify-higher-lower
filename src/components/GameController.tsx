import {useState} from "react"
import Game from "./Game"
import GameStart from "./GameStart"
import GameOver from "./GameOver"

export default function GameController() {

    const [gameStarted, setGameStarted] = useState(false)
    const [gameEnded, setGameEnded] = useState(false)
    
    const [gameMode, setGameMode] = useState("")
    const [gameScore, setGameScore] = useState(0)

    return (
        <>

            {(
                gameStarted === false && 
                <GameStart startGame={setGameStarted} setMode={setGameMode}/>       
            )}    

            {(
                gameStarted === true && 
                gameEnded === false && 
                <Game score={gameScore} updateGameScore={setGameScore} gameMode={gameMode} endGame={setGameEnded} />
            
            )}

            {(gameEnded && <GameOver finalScore={gameScore} updateGameScore={setGameScore} startGame={setGameStarted} endGame={setGameEnded}/>)}
        
        </>
    




    )


}