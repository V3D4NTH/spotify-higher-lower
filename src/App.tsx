import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from '../src/components/Game'
import GameStart from '../src/components/GameStart'
import GameOver from '../src/components/GameOver'
import GameController from '../src/components/GameController'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Game />
      <GameStart />
      <GameOver score={12}/> */}
      <GameController />
    </div>
  )
}

export default App
