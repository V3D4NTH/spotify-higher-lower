import {useState, useEffect} from 'react'
import Score from './Score'
import './Game.css'
import db2010 from '../data/2010data.json'
import db2020 from '../data/2020data.json'


export default function Game() {
    const getRandomSong = (_not:number):number => {
        let randomNumber = Math.floor(Math.random() * db2020.length)
        if (randomNumber === _not)
            return getRandomSong(_not)
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

    const [gameOver, setGameOver] = useState(false)

    const [firstArrIndex, setFirstArrIndex] = useState(getRandomSong(-1))
    const [songOne, setSongOne] = useState(db2020[firstArrIndex])

    const [secondArrIndex, setSecondArrIndex] = useState(getRandomSong(firstArrIndex))
    const [songTwo, setSongTwo] = useState(db2020[secondArrIndex])

    const [highScore , setHighScore] = useState(window.localStorage.getItem("High Score") || 0)
    const [currentScore, setCurrentScore] = useState(0)

    const UpdateGameOrGameOver = (High:boolean, valOne:number, valTwo:number):void => {

        if (checkWin(High, valOne, valTwo) === true){
            setCurrentScore(currentScore + 1)
        }
        else {
            setGameOver(true)
            if (currentScore > window.localStorage.getItem("High Score"))
                window.localStorage.setItem("High Score", currentScore)
        }
    }

    return (
        <>
            {"game over" ? gameOver===true : "game on"}
            <div>
                Song 1: {songOne.SONGNAME} {' '}
                Loudness: {songOne.loudness}
            </div>
            <div>
                Song 2: {songTwo.SONGNAME} {' '}
                Loudness: {songTwo.loudness}
            </div>
            <div>
                <button
                    onClick={() => UpdateGameOrGameOver(true, songOne.loudness, songTwo.loudness)}
                >
                    Higher
                </button>
                <button
                    onClick={() => UpdateGameOrGameOver(false, songOne.loudness, songTwo.loudness)}
                >
                    Lower
                </button>
            </div>
            <Score className="HighScoreKeeper" scoreType="High Score" score={highScore} />
            <Score className="CurrentScoreKeeper" scoreType="Current Score" score={currentScore} />

        </>
    )

}