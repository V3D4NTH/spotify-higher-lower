import {useState, useEffect} from 'react'
import './GameOver.css'

export default function GameOver(props:any) {
    
    const [imagePath , setImagePath] = useState("")
    const [endingText, setEndingText] = useState("")

    useEffect(() => {
        if (props.finalScore < 6){
            setImagePath("src/assets/carti-confused.gif")
            setEndingText("Did we make this too hard for you? We're pretty embarrassed for you right now.")
        }
        else if (props.finalScore < 16){
            setImagePath("src/assets/carti-happy.gif")
            setEndingText("This is a very respectable score. Good job.")
            
        }
        else {
            setImagePath("src/assets/carti-rocking.gif")
            setEndingText("Wow, well done! This is a very notable score, congrats!")

        }
    }, [props.score])
    
    
    const returnMainMenu = () =>{
        props.updateGameScore(0)
        props.startGame(false)
        props.endGame(false)
    }

    const playAgain = () => {
        props.updateGameScore(0)
        props.startGame(true)
        props.endGame(false)
    }

    return (
        <div className="gameOverScreen" 
        style={{backgroundImage:`url(${imagePath})`}}
        >
            <div className="gameOverContainer">
                <p>
                    <span className="scoreText">You scored:</span><br></br><br></br>
                    <span className="gameScore">{props.finalScore}</span><br></br><br></br>
                    <span className="endingText">{endingText}</span><br></br><br></br>
                    <button className="Btn" onClick={() => returnMainMenu()}>
                        Back to menu
                    </button>
                    <button className="Btn" onClick={() => playAgain()}>
                        Play again
                    </button>
                </p>
            </div>
            
        </div>

        
    )
}