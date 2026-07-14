import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const playerName = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.current) {
      setName(playerName.current.value);
    }
  };

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={playerName} placeholder="Enter your name" />
          <button type="submit">Set Name</button>
        </form>
      </p>
    </section>
  );
}
