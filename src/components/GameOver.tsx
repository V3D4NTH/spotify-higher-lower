import {useState, useEffect} from 'react'
import './GameOver.css'

export default function GameOver(props:any) {
    
    const [imagePath , setImagePath] = useState("")
    const [endingText, setEndingText] = useState("")

    useEffect(() => {
        if (props.score < 6){
            setImagePath("src/assets/carti-confused.gif")
            setEndingText("Did we make this too hard for you? We're pretty embarrassed for you right now.")
        }
        else if (props.score < 16){
            setImagePath("src/assets/carti-happy.gif")
            setEndingText("This is a very respectable score. Good job.")
            
        }
        else {
            setImagePath("src/assets/carti-rocking.gif")
            setEndingText("Wow, well done! This is a very notable score, congrats!")

        }
    }, [props.score])
    
    

    return (
        <div className="gameOverScreen" 
        style={{backgroundImage:`url(${imagePath})`}}
        >
            <div className="gameOverContainer">
                <p>
                    <span className="scoreText">You scored:</span><br></br><br></br>
                    <span className="gameScore">{props.score}</span><br></br><br></br>
                    <span className="endingText">{endingText}</span><br></br><br></br>
                    <button className="Btn">Back to menu</button>
                    <button className="Btn">Play again</button>
                </p>
            </div>
            
        </div>

        
    )
}