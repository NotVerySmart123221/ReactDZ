export function Squad({ players }) {
  return (
    <div className="squad">
      <h2>Текущий состав</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

