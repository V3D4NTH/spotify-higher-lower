import {useState, useEffect} from 'react'
import { motion } from 'framer-motion';


import Score from './Score'
import './Game.css'
import './buttons.css'
import db2010 from '../data/2010dataimage.json'
import db2020 from '../data/2020dataimage.json'
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
            const prevHighScore = window.localStorage.getItem("High Score")
            if (prevHighScore === null || currentScore > parseInt(prevHighScore))
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

    const [musicalAttribute, setMusicalAttribute] = useState("danceability")

    return (
        <div className="gameContainer">
            <div>
                {/* {gameOver && "game over"} */}
                {/* {!gameOver && "game on"} */}
                {/* {String(gameOver)} */}
                {/* {gameOver ? "game over"  : "game"} */}
            </div>

                <div className="centerIcon">
                    <div>VS</div>
                </div>
            

            <div id="leftPanel" className="gamePanel" style={{backgroundImage:`url(${songOne.image_url})`}}>
            <iframe src={`https://open.spotify.com/embed/track/${songOne.id}?utm_source=generator`}  height="80" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe src={`https://open.spotify.com/embed/track/${songTwo.id}?utm_source=generator`}  height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            
                <div className="panelText">
                    <p className="songName">{songOne.SONGNAME}</p>
                    has 
                    <p className="measurement" >{songOne[musicalAttribute]}</p>
                    <span style={{fontWeight:'500', fontSize:'18px'}}>{musicalAttribute}</span>
                </div>
            </div>
            <div id="rightPanel" className="gamePanel" style={{backgroundImage:`url(${songTwo.image_url})`}}>
                <div className="panelText">
                    <p className="songName">{songTwo.SONGNAME}</p>
                    has
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
                    <span style={{fontWeight:'500', fontSize:'18px'}}>{musicalAttribute} than {songOne.SONGNAME}</span>
                </div>
                
                
            </div>
            <div className="scoreContainer">
                <Score scoreType="High Score" score={highScore} />
                <Score scoreType="Current Score" score={currentScore} />
            </div>
            
        </div>
        
    )

}