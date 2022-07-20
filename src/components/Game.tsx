import {useState, useEffect} from 'react'
import Score from './Score'
import './Game.css'
import './buttons.css'
import db2010 from '../data/2010data.json'
import db2020 from '../data/2020data.json'
import Arrow from '../assets/arrow.svg'

export default function Game() {


    const getRandomSong = (_not:number, __not:number):number => {
        let randomNumber = Math.floor(Math.random() * db2020.length)
        if (randomNumber === _not || randomNumber === __not)
            return getRandomSong(_not, __not)
        else
            return randomNumber
    }

    const checkWin = (High:boolean, valOne:number, valTwo:number):boolean => {
        if (High){
            return (valOne <= valTwo)
        } 
        else if (!High) {
            return (valOne >= valTwo)
        }
        return false
    }
    const UpdateGameOrGameOver = (High:boolean, valOne:number, valTwo:number):void => {

        if (checkWin(High, valOne, valTwo) === true){
            setCurrentScore(currentScore + 1)

            let firstIndex = firstArrIndex
            let secondIndex = secondArrIndex

            setFirstArrIndex(secondIndex)
            setSongOne(songTwo)
            
            const randomNum = getRandomSong(firstIndex, secondIndex)

            setSecondArrIndex(randomNum)
            setSongTwo(db2020[randomNum])
            
        }
        else {
            setGameOver(true)
            if (currentScore > parseInt(window.localStorage.getItem("High Score")))
                window.localStorage.setItem("High Score", currentScore.toString())
        }
    }

    const [gameOver, setGameOver] = useState(false)

    const [firstArrIndex, setFirstArrIndex] = useState(getRandomSong(-1, -1))
    const [songOne, setSongOne] = useState(db2020[firstArrIndex])

    const [secondArrIndex, setSecondArrIndex] = useState(getRandomSong(firstArrIndex, -1))
    const [songTwo, setSongTwo] = useState(db2020[secondArrIndex])

    const [highScore , setHighScore] = useState(window.localStorage.getItem("High Score") || 0)
    const [currentScore, setCurrentScore] = useState(0)


    return (
        <div className="gameContainer">
            {/* <div>
                {gameOver && "game over"}
                {!gameOver && "game on"}
            </div> */}
            <div id="leftPanel" className="gamePanel">
            {/* <iframe Style="position:absolute;border-radius:12px" src="https://open.spotify.com/embed/track/30bqVoKjX479ab90a8Pafp?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
                <div className="panelText">
                    <p className="songName">{songOne.SONGNAME}</p>
                    has 
                    <p className="" >{songOne.danceability}</p>
                </div>
            </div>
            <div id="rightPanel" className="gamePanel">
                <div className="panelText">
                    <p className="songName">{songTwo.SONGNAME}</p>
                    {/* has 
                    <p className="" >{songTwo.danceability}</p> */}
                    <button
                    className="answerBtn"
                    onClick={() => UpdateGameOrGameOver(true, songOne.danceability, songTwo.danceability)}
                    >
                        Higher <img src={Arrow} id="up-arrow" alt="up-arrow"/>
                    </button>
                    <button
                        className="answerBtn"
                        onClick={() => UpdateGameOrGameOver(false, songOne.danceability, songTwo.danceability)}
                    >
                        Lower <img src={Arrow} id="down-arrow" alt="down-arrow"/>
                    </button>
                </div>
                
                
            </div>
            <div className="scoreContainer">
                <Score scoreType="High Score" score={highScore} />
                <Score scoreType="Current Score" score={currentScore} />
            </div>
        </div>
        
    )

}