import { useState } from 'react';

import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns (prevGameTurns => {
      let currentPlayer = 'X';
      prevGameTurns.length > 0 && prevGameTurns[0].player === 'X' && (currentPlayer = 'O');

      const updatedGameTurns = [{
        square : {
          row: rowIndex,
          col: colIndex
        },
        player : activePlayer
      },...prevGameTurns];

      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'} />
          <Player initialName={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log />
    </main>
  )
}

export default App
