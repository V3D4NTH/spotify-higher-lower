import './Score.css'

export default function Score(props) {
    return(
        <h2>{props.scoreType}: {props.score}</h2>
    )
}