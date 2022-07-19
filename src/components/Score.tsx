import './Score.css'

export default function Score(props:any) {
    return(
        <h2>{props.scoreType}: {props.score}</h2>
    )
}