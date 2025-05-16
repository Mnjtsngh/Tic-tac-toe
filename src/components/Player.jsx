import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  
  const [editing, setEditing] = useState(false);
  const [enteredName, setEnteredName] = useState(name);

  function handleChange(event) {
    setEnteredName(event.target.value);
  }
  function handleClick() {
    setEditing((editing) => !editing);
    if (editing) onChangeName(symbol, enteredName);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!editing && <span className="player-name">{enteredName}</span>}
        {editing && (
          <input type="text" onChange={handleChange} value={enteredName} />
        )}</span>
        <span className="player-symbol">{symbol}</span>
      
      <span><button onClick={handleClick}>{editing ? "Save" : "Edit"}</button></span>
    </li>
  );
}
