const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard( { onSelectSquare, turns } ) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard(prevGameBoard => {
  //     const uptdatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     uptdatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return uptdatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
}