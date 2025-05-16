export default function GameOver({ winner, onSelectRematch }) {
  return (
    <div id="game-over">
      <h2> Game Over !</h2>
      {winner && <p>{winner},You won!</p>}
      {!winner && <p>Its a draw</p>}
      <button onClick={onSelectRematch}>Rematch</button>
    </div>
  );
}
