import { useState } from 'react';

import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"
import { WINNING_COMBINATIONS } from './winning_combinations.js';

function deriveGamePlayer(gameTurns) {
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    return 'O';
  }
  return 'X';
}

function App() {
  const [players, setPlayers] = useState(
    {
      X: 'Player 1',
      O: 'Player 2'
    }
  )
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveGamePlayer(gameTurns);

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol
      && firstSquareSymbol === secondSquareSymbol
      && firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  // draw condition
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      activePlayer = deriveGamePlayer(prevGameTurns);

      const updatedGameTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: activePlayer
      }, ...prevGameTurns];

      return updatedGameTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => { return { ...prevPlayers, [symbol]: newName }; });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
