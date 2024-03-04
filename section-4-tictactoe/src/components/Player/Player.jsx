import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>
  let btnCaption = "Edit";

  if (isEditing) {
    playerNameElement = <input type="text" required value={playerName} onChange={handleNameChange} />
    btnCaption = "Save";
  }

  function handleEditClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}