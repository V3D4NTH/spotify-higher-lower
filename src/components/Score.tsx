import './Score.css'

export default function Score(props:any) {
    return(
        
        <h2 className="scoreKeeper">{props.scoreType}: {props.score}</h2>
    )
}