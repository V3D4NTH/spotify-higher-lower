import Score from './Score'
import './Game.css'

export default function Game() {
    return (
        <>
            <h1>This is game</h1>
            <Score className="HighScoreKeeper" scoreType="High Score" score={1} />
            <Score className="CurrentScoreKeeper" scoreType="Current Score" score={2} />

        </>
    )

}