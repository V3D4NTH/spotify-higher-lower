import {useState} from 'react'
import './GameStart.css'

import glassesMan from '../assets/glasses-man.png'
export default function GameStart() {

    const modes = ["danceability", "energy", "loudness", "tempo", "valence"]
    const [gameMode, setGameMode] = useState("")

    return (
        <div className="GameStartContainer">
            <h1>Spotify Higher Or Lower</h1>
            <h2>Which song has the greater musical component?</h2>      
            <p>
                A frustratingly addictive game of higher or lower using musical data.
            </p>
            <p>
                The data is aggregated from Spotify API results from 2022.
            </p>


            <form>
                <h4>Choose mode:</h4>
                {modes.map((mode) => (
                    (<>
                        <label>{mode}</label>
                        <input type="radio" className="" value={mode} required />
                    </>)
                    
                )
                    )}

                <input type="submit" className='playBtn' value="Play"/>
            </form>

            

            

        </div>
    )
}