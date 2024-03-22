export default function Log(turns) {
  // if not empty map the turns
  return <ol id="log">
    {turns.turns.map((turn, index) => (
      <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected row {turn.square.row+1}, column {turn.square.col+1}</li>
    ))}
  </ol>
}