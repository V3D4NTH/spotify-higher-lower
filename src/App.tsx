import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from '../src/components/Game'
import GameStart from '../src/components/GameStart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GameStart />
      {/* <Game /> */}
    </div>
  )
}

export default App
