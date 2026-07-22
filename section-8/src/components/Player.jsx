import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const playerName = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.current) {
      setName(playerName.current.value);
      playerName.current.value = "";
    }
  };

  return (
    <section id="player">
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
          <input type="text" ref={playerName} placeholder="Enter your name" />
          <button onClick={handleSubmit} type="button">Set Name</button>
      </p>
    </section>
  );
}
