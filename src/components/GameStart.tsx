import {useState} from 'react'
import './GameStart.css'

import glassesMan from '../assets/glasses-man.png'
export default function GameStart() {

    const modes = ["danceability", "energy", "loudness", "tempo", "valence"]
    const [gameMode, setGameMode] = useState("")

    return (
        <div className="GameStartContainer">
            <h1 style={{color:"green"}}>Spotify Higher Or Lower</h1>
            <h2 style={{color:"red"}}>Which song has the greater musical component?</h2>      
            <p>
                A frustratingly addictive game of higher or lower using musical data. <br></br>
                The data is aggregated from Spotify API results from 2022.
            </p>

            <form className="modeForm" onSubmit={(e) => e.preventDefault()}>
                <h3>Choose mode:</h3>
                <div className="li-container">
                {modes.map((mode, index) => (
                    <div className="labelInputPair">
                    <input className="modeInput" 
                            value={mode} id={mode} type="radio" 
                            key={mode} name="modeChoice" 
                            onChange={(e) => setGameMode(mode)}
                            required />
                    <label className="modeLabel" 
                            key={index} htmlFor={mode}>{mode}</label>
                    <br />
                    </div>
                )
                    )}
                </div>
                <input type="submit" className='playBtn' value="Play"/>
            </form>

            

            

        </div>
    )
}